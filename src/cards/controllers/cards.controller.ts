import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    Res, UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { Response, Request } from 'express';
import { CardsService } from '../services/cards.service';
import { TemplateDTO } from '../dto/Template.dto';

@Controller('card')
export class CardsController {
    constructor(private cardsService: CardsService) {}

    @Get('/templates')
    async getTemplates() {
        return await this.cardsService.getTemplates();
    }

    @Post('/template')
    @UsePipes(ValidationPipe)
    async addTemplate(
        @Body() template: TemplateDTO,
        @Res() res: Response,
    ) {
        try {
            await this.cardsService.addTemplate(template);
            res.status(200).send({ message: 'Template was created' });
        } catch (e) {
            res.status(500).send({ message: e.toString() });
        }
    }
}
