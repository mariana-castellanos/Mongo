import { IsNotEmpty, IsAlpha, IsInt, Min, Max, IsPositive} from "class-validator";

export class CreateBootcampDto {

    @IsNotEmpty()
    @IsAlpha()
     readonly "name": string; 

     @IsNotEmpty()
     @IsPositive()
     readonly "phone": string; 
     readonly "address": string;

     @IsInt()
     @IsNotEmpty()
     @Min(1)
     @Max(10)
     readonly "averageRating": number;
     
     readonly "createdAt": Date; 

}
