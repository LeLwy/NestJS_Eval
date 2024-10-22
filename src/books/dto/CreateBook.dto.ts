import { IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    content: String
}