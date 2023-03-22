/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SinhVienController } from './controller/sinhvien.controller';
import { SinhVienService } from './service/sinhvien.service';
import { GiaovienController } from './controller/giaovien.controller';
import { GiaovienService } from './service/giaovien.service';
@Module({
  imports: [],
  controllers: [AppController, SinhVienController, GiaovienController],
  providers: [AppService, SinhVienService, GiaovienService],
})
export class AppModule { }
