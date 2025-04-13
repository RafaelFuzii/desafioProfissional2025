import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagemModule } from './personagem/personagem.module';
import { ItemMagicoModule } from './item-magico/item-magico.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PersonagemModule, ItemMagicoModule, MongooseModule.forRoot("mongodb://localhost:27017/rpg")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
