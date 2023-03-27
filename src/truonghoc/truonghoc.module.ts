/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            // host: '192.168.0.107',
            host: '172.28.176.1',
            port: 5432,
            username: 'postgres',
            password: 'hitc',
            entities: [],
            database: 'truong_hoc',
            synchronize: false,
        })
    ],
})

export class TruongHocModule { }