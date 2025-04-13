import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Personagem } from './entities/personagem.entity';
import { Model } from 'mongoose';
import { ItemMagico } from 'src/item-magico/entities/item-magico.entity';

@Injectable()
export class PersonagemService {
  constructor(
    @InjectModel(Personagem.name) private personagemModel: Model<Personagem>,
    @InjectModel(ItemMagico.name) private itemMagicoModel: Model<ItemMagico>,
  ) {}
  
  create(personagemCriado: CreatePersonagemDto) {

    const personagem = new this.personagemModel(personagemCriado)   
    const somaPotosAtributos = personagem.forca + personagem.defesa

    if (somaPotosAtributos > 10) {
      throw new BadRequestException("A soma dos pontos de forca e defesa não pode ser maior que 10 ex: 5-5, 10-0 ou 6,4")
    }

    personagem.save()

    return personagem;
  }

  findAll() {
    return this.personagemModel.find()
  }

  findOne(id: string) {
    return this.personagemModel.findById(id)
  }

  async update(id: string, personagem: UpdatePersonagemDto) {
    const updatePersonaegm = await this.personagemModel.findByIdAndUpdate(id,{
     $set: personagem 
    }, {new: true}) 
  
    return updatePersonaegm
  }

  async listarItensPersonagens(persogemID: string) {
    const personagem = await this.personagemModel.findById(persogemID, 'itemMagico').populate('itemMagico').exec()
    return personagem
  }

  async buscarAmuletoPersonagem(persogemID: string) {
    const personagem = await this.personagemModel.findById(persogemID, 'itemMagico')
    .populate({
      path: 'itemMagico',
      match: { tipoItem: 'amuleto' }
    }).exec();

    return personagem
  }

  remove(id: string) {
    return this.personagemModel.findByIdAndDelete(id)
  }

  async removerItemMagico(personagemID: string, nomeItem: string) {
    const itemMagico = await this.itemMagicoModel.findOne({ nome: nomeItem }).exec();

    if (!itemMagico) {
      throw new NotFoundException('Item mágico não encontrado');
    }

    const result = await this.personagemModel.updateOne(
      { _id: personagemID },
      { $pull: { itemMagico: itemMagico._id } }
    );

    return 'Item removido com sucesso do personagem'
  }
}
