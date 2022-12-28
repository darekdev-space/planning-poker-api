import { Module } from '@nestjs/common';
import { CardsController } from './controllers/cards.controller';
import { CardsService } from './services/cards.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemplateEntity } from "./entities/Template.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TemplateEntity])],
    controllers: [CardsController],
    providers: [CardsService],
})
export class CardsModule {}
