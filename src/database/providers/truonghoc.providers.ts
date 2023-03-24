/* eslint-disable prettier/prettier */
import { DataSource } from "typeorm";
import { TruongHocEntity } from "../entity/truonghoc.entity";

export const truonghocProviders = [
    {
        provide: 'TRUONGHOC_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(TruongHocEntity),
        inject: ['DATA_SOURCE'],
    },
]