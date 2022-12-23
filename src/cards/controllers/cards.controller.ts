import { Controller, Get } from '@nestjs/common';
import { CardsService } from '../services/cards.service';

@Controller('card')
export class CardsController {
    constructor(private cardsService: CardsService) {}

    @Get('/templates')
    getTemplates() {
        return this.cardsService.getTemplates();
    }
}
