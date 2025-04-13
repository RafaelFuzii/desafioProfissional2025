import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';
import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('item-magico')
export class ItemMagicoController {
  constructor(private readonly itemMagicoService: ItemMagicoService) {}

  @Post('criar')
  @ApiOperation({ summary: 'Cadastrar novo Item' })
  create(@Body() createItemMagicoDto: CreateItemMagicoDto) {
    return this.itemMagicoService.create(createItemMagicoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os Itens' })
  findAll() {
    return this.itemMagicoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar os Item por ID do Item' })
  findOne(@Param('id') id: string) {
    return this.itemMagicoService.findOne(id);
  }

  @Get('adicionarItemAoPersonagem/:nomeItem/:personagemId')
  @ApiOperation({ summary: 'Adicionar Item ao Personagem' })
  adcionarItem(@Param('nomeItem') nomeItem: string, @Param('personagemId') personagemID: string) {
    return this.itemMagicoService.addItemMagicoPersonagem(nomeItem, personagemID);
  }
}
