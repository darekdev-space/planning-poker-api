import { Injectable } from '@nestjs/common';
import { TemplateDTO } from '../dto/Template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TemplateEntity } from '../entities/Template.entity';
import { Repository } from 'typeorm';
import { raw } from 'express';

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(TemplateEntity)
        private templateRepository: Repository<TemplateEntity>,
    ) {}

    async getTemplates(): Promise<TemplateDTO[]> {
        const template: TemplateEntity[] = await this.templateRepository.find();

        return template;
    }

    async addTemplate(template: TemplateDTO): Promise<void> {
        await this.templateRepository.insert(template);
    }
}
