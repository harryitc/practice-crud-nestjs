/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TruongHocEntity {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        length: 500,
        default: 'abc'
    })
    name: string;


    @Column('text')
    description: string;

    @Column({
        default: 'filename ne'
    })
    filename: string;


    @Column('int', {
        default: '122333'
    })
    views: number;

    @Column()
    isPublished: boolean;

}