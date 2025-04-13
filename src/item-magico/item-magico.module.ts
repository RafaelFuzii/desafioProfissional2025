import { Module } from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';
import { ItemMagicoController } from './item-magico.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemMagico, itemMagicoSchema } from './entities/item-magico.entity';
import { Personagem, personagemSchema } from 'src/personagem/entities/personagem.entity';

@Module({
  imports: [ MongooseModule.forFeature([{ name: ItemMagico.name, schema: itemMagicoSchema }, { name: Personagem.name, schema: personagemSchema }])],
  controllers: [ItemMagicoController],
  providers: [ItemMagicoService],
})
export class ItemMagicoModule {}
