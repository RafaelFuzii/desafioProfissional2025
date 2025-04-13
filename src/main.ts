import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder().setTitle('RPG API').setDescription('Documentação da API para gerenciamento de personagens e itens mágicos').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
