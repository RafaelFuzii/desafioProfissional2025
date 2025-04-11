import { Test, TestingModule } from '@nestjs/testing';
import { ItemMagicoController } from './item-magico.controller';
import { ItemMagicoService } from './item-magico.service';

describe('ItemMagicoController', () => {
  let controller: ItemMagicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemMagicoController],
      providers: [ItemMagicoService],
    }).compile();

    controller = module.get<ItemMagicoController>(ItemMagicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
