import { IsString, IsNotEmpty, IsEnum, IsInt, Max, ValidateIf } from "class-validator";
import { Classes } from "../../enum/classes.enum";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonagemDto {
    @ApiProperty()
    @IsString()
    nome: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nomeAventureiro: string

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Classes, { message: "Classe inválida. Use uma das seguintes classes: guerreiro, mago, arqueiro, ladino, bardo." })
    classe: Classes;

    @ApiProperty()
    @IsInt()
    level: number
    
    @ApiProperty()
    itemMagico: Array<string>;

    @ApiProperty()
    @IsInt()
    @Max(10)
    forca: number

    @ApiProperty()
    @IsInt()
    @Max(10)
    defesa: number
}
