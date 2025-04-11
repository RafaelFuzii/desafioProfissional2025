import { PartialType } from '@nestjs/mapped-types';
import { CreateItemMagicoDto } from './create-item-magico.dto';

export class UpdateItemMagicoDto extends PartialType(CreateItemMagicoDto) {}
