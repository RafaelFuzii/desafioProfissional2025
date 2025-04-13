import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ItemMagico } from './entities/item-magico.entity';
import { Model } from 'mongoose';
import { TiposItem } from "../enum/tiposItem.enum"
import { Personagem } from 'src/personagem/entities/personagem.entity';
import TestAgent from 'supertest/lib/agent';
@Injectable()
export class ItemMagicoService {
  constructor(
    @InjectModel(ItemMagico.name) private itemMagicoModel: Model<ItemMagico>,
    @InjectModel(Personagem.name) private personagemModel: Model<Personagem>
  ) {}
  
  create(itemMagicoCriado: CreateItemMagicoDto) {
    const itemMagico = new this.itemMagicoModel(itemMagicoCriado)   
    const somaPotosAtributos = itemMagico.forca + itemMagico.defesa
    const itemType = itemMagico.tipoItem

    if (itemType == TiposItem.ARMA) {
      itemMagico.defesa = 0
    } else if (itemType == TiposItem.ARMADURA) {
      itemMagico.forca = 0
    } 

    if (itemMagico.forca == 0 && itemMagico.defesa == 0) {
      throw new BadRequestException("Não podem existir Itens com zero de Defesa e zero de Força")
    } 

    if (somaPotosAtributos > 10) {
      throw new BadRequestException("A soma dos pontos de forca e defesa não pode ser maior que 10 ex: 5-5, 10-0 ou 6,4")
    }

    itemMagico.save()

    return itemMagico;
  }

  findAll() {
    return this.itemMagicoModel.find()
  }

  findOne(id: string) {
    return this.itemMagicoModel.findById(id)
  }

  async addItemMagicoPersonagem(nomeItem:string, persogemID:string) {
    const personagem = await this.personagemModel.findById(persogemID)
    if (!personagem) {
      throw new NotFoundException('Personagem não encontrado');
    }

    const itemMagico = await this.itemMagicoModel.findOne({ nome: `${nomeItem}`}).exec()

    if (!itemMagico) {
      throw new NotFoundException('Item não encontrado');
    }
    
    if (personagem.itemMagico.length > 0) {
      const itensDoPersonagem = await this.itemMagicoModel.find({
        _id: { $in: personagem.itemMagico }
      });
  
      const jaTemAmuleto = itensDoPersonagem.some(item => item.tipoItem === 'amuleto');
  
      if (itemMagico.tipoItem === 'amuleto' && jaTemAmuleto) {
        throw new BadRequestException('O personagem só pode possuir 1 item mágico do tipo Amuleto.');
      }
    }

    personagem.itemMagico.push(itemMagico._id);
    personagem.forca += itemMagico.forca;
    personagem.defesa += itemMagico.defesa;

    await personagem.save();
    

    return personagem
  }

  update(id: number, updateItemMagicoDto: UpdateItemMagicoDto) {
    return `This action updates a #${id} itemMagico`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemMagico`;
  }
}
