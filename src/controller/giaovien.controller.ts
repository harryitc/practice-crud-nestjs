/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { GiaoVien } from 'src/giaovien';
import { GiaovienService } from 'src/service/giaovien.service';

@Controller('giaovien')
export class GiaovienController {

    constructor(private giaoVienService: GiaovienService) { }

    // lấy tất cả thông tin về giáo viên
    @Get()
    layDanhSachGiaoVien() {
        return this.giaoVienService.layDanhSachGiaoVien()
    }

    // lấy thông tin của 1 giáo viên
    @Get(':id')
    layThongTinGiaoVien(@Param('id') id: number) {
        return this.giaoVienService.layThongTinGiaoVien(id)
    }

    // thêm 1 giáo viên
    @Post('add')
    themGiaoVien(@Body() giaoVien: GiaoVien) {
        return this.giaoVienService.themGiaoVien(giaoVien)
    }

    // xóa toàn bộ giáo viên
    @Delete('delete')
    xoaDanhSachGiaoVien() {
        return this.giaoVienService.xoaDanhSachGiaoVien()
    }

    // xóa 1 giáo viên
    @Delete('delete/:id')
    xoaThongTinGiaoVien(@Param('id') id: number) {
        return this.giaoVienService.xoaThongTinGiaoVien(id)
    }

}
