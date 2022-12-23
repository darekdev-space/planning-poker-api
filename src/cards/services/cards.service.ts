import { Injectable } from '@nestjs/common';
import { TemplateDto } from '../dto/Template.dto';

@Injectable()
export class CardsService {
    async getTemplates(): Promise<TemplateDto[]> {
        return Promise.resolve([]);
    }
}
