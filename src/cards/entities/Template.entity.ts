import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TemplateEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    id: number;

    @Column()
    name: string;

    @Column("int", {array: true})
    values: number[];
}
