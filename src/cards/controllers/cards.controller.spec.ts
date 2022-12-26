import { CardsController } from './cards.controller';
import { CardsService } from '../services/cards.service';
import { Test } from '@nestjs/testing';

describe('TEST CARDS CONTROLLER', () => {
    let cardsService: CardsService;
    let cardsController: CardsController;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [CardsController],
            providers: [CardsService],
        }).compile();

        cardsController = moduleRef.get<CardsController>(CardsController);
        cardsService = moduleRef.get<CardsService>(CardsService);
    });

    it('should return all templates', async () => {
        const templatesMock = [{ name: 'Test Template', values: [1, 2, 3, 5] }];
        jest.spyOn(cardsService, 'getTemplates').mockImplementation(() =>
            Promise.resolve(templatesMock),
        );

        expect(await cardsController.getTemplates()).toBe(templatesMock);
    });
});
