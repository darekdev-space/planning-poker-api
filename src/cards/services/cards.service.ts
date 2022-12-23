import { Injectable } from '@nestjs/common';
import { TemplateDto } from '../dto/Template.dto';

@Injectable()
export class CardsService {
    getTemplates(): TemplateDto[] {
        return [{ name: 'test', values: [1, 2] }];
    }
}
