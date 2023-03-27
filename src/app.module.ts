/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SinhVienController } from './controller/sinhvien.controller';
import { SinhVienService } from './service/sinhvien.service';
import { GiaovienController } from './controller/giaovien.controller';
import { GiaovienService } from './service/giaovien.service';
import { TruongHocModule } from './database/truonghoc.module';
@Module({
  // imports: [TruongHocModule],
  // imports: [TypeOrmModule.forRoot({
  //   type: 'mssql',
  //   // host: '192.168.0.107',
  //   host: '172.26.176.1',
  //   port: 1433,
  //   username: 'harryitc',
  //   password: 'hitc',
  //   entities: [TruongHocEntity],
  //   database: 'TruongHoc',
  //   synchronize: false,
  //   pool: {
  //     max: 10,
  //     min: 0,
  //     idleTimeoutMillis: 30000
  //   },
  //   options: {
  //     encrypt: false,
  //   }
  // })],
  controllers: [AppController, SinhVienController, GiaovienController],
  providers: [AppService, SinhVienService, GiaovienService],
})
export class AppModule { }
