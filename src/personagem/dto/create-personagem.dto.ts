import { IsString, IsNotEmpty, IsEnum, IsInt, Max } from "class-validator";
import classes from "../enum/classes.enum";

export class CreatePersonagemDto {
    @IsString()
    id: string;
    nome: string;

    @IsString()
    @IsNotEmpty()
    NomeAventureiro: string;

    @IsNotEmpty()
    @IsEnum(classes)
    classe: classes;

    @IsInt()
    level: number;

    listaItemMagico: Array<string>;

    @IsInt()
    @Max(10)
    forca: number;
    defesa: number
}
