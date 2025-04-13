import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('personagem')
export class PersonagemController {
  constructor(private readonly personagemService: PersonagemService) {}

  @Post('criar')
  @ApiOperation({ summary: 'Cadastrar novo personagem' })
  create(@Body() createPersonagemDto: CreatePersonagemDto) {
    return this.personagemService.create(createPersonagemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os personagem' })
  findAll() {
    return this.personagemService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar um personagem por ID' })
  findOne(@Param('id') id: string) {
    return this.personagemService.findOne(id);
  }

  @Get('listarItensPersonagem/:personagemID')
  @ApiOperation({ summary: 'Listar Itens do personagem' })
  listarItensPersonagem(@Param('personagemID') personagemID: string) {
    return this.personagemService.listarItensPersonagens(personagemID)
  }

  @Get('listarAmuleto/:personagemID')
  @ApiOperation({ summary: 'Listar Amuleto do personagem' })
  listarAmuletoPersonagem(@Param('personagemID') personagemID: string) {
    return this.personagemService.buscarAmuletoPersonagem(personagemID)
  }

  @Put('atualizar/:id')
  @ApiOperation({ summary: 'Atualizar Personagem por ID do personagem' })
  update(@Param('id') id: string, @Body() updatePersonagemDto: UpdatePersonagemDto) {
    return this.personagemService.update(id, updatePersonagemDto);
  }

  @Delete('deletar/:id')
  @ApiOperation({ summary: 'Remover Personagem' })
  remove(@Param('id') id: string) {
    return this.personagemService.remove(id);
  }

  @Delete('deletarItem/:personagemID/:nomeItem')
  @ApiOperation({ summary: 'Deletar Item do Personagem' })
  deletarItemPersonagem(@Param('personagemID') personagemID: string, @Param('nomeItem') nomeItem: string) {
    return this.personagemService.removerItemMagico(personagemID, nomeItem)
  }
}
