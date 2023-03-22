/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { updateGiaoVienDto } from 'src/dto/giaovien.dto';
import { editSinhVienDto } from 'src/dto/sinhvien.dto';
import { SinhVienService } from 'src/service/sinhvien.service';
@Controller('sinhvien')
export class SinhVienController {
  constructor(private sinhVienService: SinhVienService) { }

  // lấy toàn bộ thông tin học sinh
  @Get('')
  getDanhSachSinhVien() {
    return this.sinhVienService.getDanhSachSinhVien()
  }

  // lấy 1 thông tin học sinh
  @Get(':id')
  getThongTinSinhVien(@Param('id') id: number) {
    return this.sinhVienService.getThongTinSinhVien(id)
  }

  // thêm 1 sinh viên
  @Post('add')
  themSinhVien(@Body() themSinhVien: updateGiaoVienDto) {
    return this.sinhVienService.themSinhVien(themSinhVien)
  }

  // sửa thông tin về sinh vien này
  @Put('edit/:id')
  suaThonTinGiaoVien(@Param('id') id: number, @Body() sinhVien: editSinhVienDto) {
    return this.sinhVienService.suaThongTinSinhVien(id, sinhVien)
  }

  // xóa toàn bộ sinh viên
  @Delete('delete')
  xoaDanhSachSinhVien() {
    return this.sinhVienService.xoaDanhSachSinhVien();
  }

  // xóa thông tin 1 sinh viên
  @Delete('delete/:id')
  xoaThongTinSinhVien(@Param('id') id: number) {
    return this.sinhVienService.xoaThongTinSinhVien(id)
  }
}
