/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { dataSinhVien } from 'src/data_sinhvien';
import { SinhVien } from 'src/hocsinh';

@Injectable()
export class SinhVienService {

  sinhvien: SinhVien[] = dataSinhVien;

  constructor() { }

  // lấy toàn bộ thông tin về sinh viên
  getDanhSachSinhVien() {
    return this.sinhvien;
  }

  // lấy thông tin của 1 sinh viên
  getThongTinSinhVien(id) {
    // Tìm xem trong danh sách có id này không?
    const found = this.sinhvien.findIndex((idSinhVien: SinhVien) => idSinhVien.id == id)

    // Nếu không
    if (found == -1) {
      return `Lỗi! không tìm thấy id này`
    }

    // nếu có
    return this.sinhvien[id - 1]
  }

  // thêm 1 sinh viên
  themSinhVien(sinhvien) {
    this.sinhvien.push(sinhvien)
    console.log(this.sinhvien);
    return `đã thêm thông tin sinh viên có tên: ${sinhvien.name}`
  }

  // xóa toàn bộ sinh viên
  xoaDanhSachSinhVien() {
    this.sinhvien = []
    console.log('danh sách hiện tại là: ', this.sinhvien)
    return `đã xóa toàn bộ sinh viên`
  }

  // xóa 1 thông tin sinh viên
  xoaThongTinSinhVien(id: number) {

    // Trước khi tìm id, chúng ta phải
    // Tìm xem trong danh sách có id này không?
    const found = this.sinhvien.findIndex((idSinhVien: SinhVien) => idSinhVien.id == id)

    // Nếu không
    if (found == -1) {
      console.log(`Lỗi! không tìm thấy id này`);
      return `Lỗi! không tìm thấy id này`
    }

    // Nếu có -> xóa id 
    for (let i = id - 1; i < this.sinhvien.length - 1; i++) {
      // cho danh sách hiện tại = danh sách phía sau
      this.sinhvien[i] = this.sinhvien[i + 1]
      // đặt lại id
      this.sinhvien[i].id = i + 1
    }

    // trừ kích thước đi 1 sau khi xóa 1 danh sách
    this.sinhvien.length--;

    console.log('Danh sách hiện tại: ', this.sinhvien);
    return `đã xóa thông tin sinh viên: `
  }

}
