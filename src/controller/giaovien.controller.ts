/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GiaoVien } from 'src/giaovien.interface';
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
    themGiaoVien(@Body() giaoVien: { name: string, age: number }) {
        return this.giaoVienService.themGiaoVien(giaoVien)
    }

    // sửa thông tin về giáo viên này
    @Put('edit/:id')
    suaThonTinGiaoVien(@Param('id') id: number, @Body() giaoVien: GiaoVien) {
        return this.giaoVienService.suaThongTinGiaoVien(id, giaoVien)
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
