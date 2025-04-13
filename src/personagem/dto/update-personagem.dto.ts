
import { PartialType } from '@nestjs/swagger';
import { CreatePersonagemDto } from './create-personagem.dto';


export class UpdatePersonagemDto extends PartialType(CreatePersonagemDto) {
}
