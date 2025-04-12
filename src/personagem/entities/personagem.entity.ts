import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Personagem {

    @Prop()
    nome: string;
    NomeAventureiro: string;
    classe: string;
    level: number;
    listaItemMagico: Array<string>;
    forca: number;
    defesa: number
}

export const personagemSchema = SchemaFactory.createForClass(Personagem)