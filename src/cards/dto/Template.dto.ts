import { IsArray, IsNotEmpty } from 'class-validator';

export class TemplateDTO {
    id: number;

    @IsNotEmpty()
    name: string;
    @IsArray()
    values: number[];
}
