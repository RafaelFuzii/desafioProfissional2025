import { IsEnum, IsInt, IsNotEmpty, IsString, Max } from "class-validator";
import { TiposItem } from "../../enum/tiposItem.enum";
import { ApiProperty } from "@nestjs/swagger";
export class CreateItemMagicoDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty()
    @IsEnum(TiposItem, {message: "Tipo item invalido. Use uma das seguintes tipos: arma, armadura e amuleto"})
    @IsNotEmpty()
    tipoItem: TiposItem;

    @ApiProperty()
    @IsInt()
    @Max(10)
    forca: number;

    @ApiProperty()
    @IsInt()
    @Max(10)
    defesa: number
}
