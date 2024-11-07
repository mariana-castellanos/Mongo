
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema ()
export class Review {

    @Prop()
    name: string;

    @Prop()
    phone: number;

    @Prop()
    address: string;

    @Prop()
    averageRating: number;

    @Prop()
    createdAt: Date;



}


export const ReviewSchema = SchemaFactory.createForClass(Review);