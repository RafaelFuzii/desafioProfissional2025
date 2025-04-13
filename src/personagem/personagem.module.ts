import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Personagem, personagemSchema } from './entities/personagem.entity';
import { ItemMagico, itemMagicoSchema } from 'src/item-magico/entities/item-magico.entity';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Personagem.name, schema: personagemSchema }, { name: ItemMagico.name, schema: itemMagicoSchema }])],
  controllers: [PersonagemController],
  providers: [PersonagemService],
})
export class PersonagemModule {}
