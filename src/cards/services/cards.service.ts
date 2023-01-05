import { Injectable } from '@nestjs/common';
import { TemplateDto } from '../dto/Template.dto';
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

    async getTemplates(): Promise<TemplateDto[]> {
        const template: TemplateEntity[] = await this.templateRepository.find();

        return template;
    }

    async addTemplate(template: TemplateDto): Promise<void> {
        await this.templateRepository.insert(template);
    }
}
