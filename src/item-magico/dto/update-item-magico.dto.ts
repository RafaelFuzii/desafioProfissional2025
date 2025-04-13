import { PartialType } from '@nestjs/swagger'; 
import { CreateItemMagicoDto } from './create-item-magico.dto';

export class UpdateItemMagicoDto extends PartialType(CreateItemMagicoDto) {

}
