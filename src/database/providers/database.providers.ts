/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mssql',
                // host: '192.168.0.107',
                host: '172.26.176.1',
                port: 1433,
                username: 'harryitc',
                password: 'hitc',
                database: 'TruongHoc',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: false,
                pool: {
                    max: 10,
                    min: 0,
                    idleTimeoutMillis: 30000
                },
                options: {
                    encrypt: false,
                }
            });

            return dataSource.initialize()
                .then(() => {
                    console.log('>>> Connected database');

                    // here you can start to work with your database
                })
                .catch((error) => console.log(error));
        },
    },
];