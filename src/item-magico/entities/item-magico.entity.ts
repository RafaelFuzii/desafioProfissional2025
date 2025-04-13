import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ItemMagico {

    @Prop()
    nome: string;

    @Prop()
    tipoItem: string;

    @Prop()
    forca: number;

    @Prop()
    defesa: number
}

export const itemMagicoSchema = SchemaFactory.createForClass(ItemMagico)