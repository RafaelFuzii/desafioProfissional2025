import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";

@Schema()
export class Personagem {
    
    @ApiProperty()
    @Prop()
    nome: string;

    @Prop()
    nomeAventureiro: string;

    @Prop()
    classe: string;

    @Prop()
    level: number;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ItemMagico' }] })
    itemMagico: mongoose.Types.ObjectId[];

    @Prop()
    forca: number;

    @Prop()
    defesa: number
}

export const personagemSchema = SchemaFactory.createForClass(Personagem)
