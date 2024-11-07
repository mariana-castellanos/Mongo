import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema ()
export class Courses {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    address: string;

    @Prop()
    averageRating: number;

    @Prop()
    createdAt: Date;

}


export const CoursesSchema = SchemaFactory.createForClass(Courses);
