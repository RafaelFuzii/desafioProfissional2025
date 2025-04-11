import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagemModule } from './personagem/personagem.module';
import { ItemMagicoModule } from './item-magico/item-magico.module';

@Module({
  imports: [PersonagemModule, ItemMagicoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
