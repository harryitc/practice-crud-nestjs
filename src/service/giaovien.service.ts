/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { dataGiaoVien } from 'src/data_giaovien';
import { GiaoVien } from 'src/giaovien.interface';

@Injectable()
export class GiaovienService {

    giaovien: GiaoVien[] = dataGiaoVien

    // lấy danh sách giáo viên
    layDanhSachGiaoVien() {
        return this.giaovien
    }

    // lấy 1 thông tin của giáo viên
    layThongTinGiaoVien(id) {
        // Tìm xem trong danh sách có id này không?
        const found = this.giaovien.findIndex((idGiaoVien: GiaoVien) => idGiaoVien.id == id)

        // Nếu không
        if (found == -1) {
            throw new HttpException('Lỗi! Không tìm thấy id giáo viên này.', HttpStatus.NOT_FOUND);
        }

        // Nếu có
        return this.giaovien[id - 1];
    }

    // sửa thông tin giáo viên
    suaThongTinGiaoVien(paramId, bodyGiaoVien) {
        const found = this.giaovien.findIndex((idGiaoVien: GiaoVien) => idGiaoVien.id == paramId);

        // nếu tìm thấy
        if (found != -1) {

            const obj_giaovien = {
                id: Number(paramId),
                ...bodyGiaoVien
            }

            this.giaovien[paramId - 1] = obj_giaovien

            // convert string to interger
            obj_giaovien.age = Number(obj_giaovien.age)


            console.log(this.giaovien)
            return `đã cập nhật giáo viên với id = ${paramId}`
        }

        throw new HttpException('Lỗi! Không tìm thấy id giáo viên này.', HttpStatus.NOT_FOUND);
    }

    // xóa toàn bộ danh sách giáo viên
    xoaDanhSachGiaoVien() {
        this.giaovien = []
        console.log('danh sách hiện tại là: ', this.giaovien)
        return `đã xóa toàn bộ danh sách giáo viên`
    }

    // thêm 1 giáo viên
    themGiaoVien(giaovien) {
        const obj_giaovien: GiaoVien = {
            id: this.giaovien.length + 1,
            ...giaovien
        }

        // convert string to interger
        obj_giaovien.age = Number(obj_giaovien.age)

        // them vao danh sach
        this.giaovien.push(obj_giaovien)

        return obj_giaovien
    }

    // xóa 1 giáo viên nào đó{
    xoaThongTinGiaoVien(id) {
        // Trước khi tìm id, chúng ta phải
        // Tìm xem trong danh sách có id này không?
        const found = this.giaovien.findIndex((idgiaovien: GiaoVien) => idgiaovien.id == id)

        const thongTinGiaoVienTruocKhiXoa = this.giaovien[found]

        // Nếu không
        if (found == -1) {
            throw new HttpException('Lỗi! Không tìm thấy id này.', HttpStatus.NOT_FOUND);
        }

        // Nếu có -> xóa id 
        for (let i = id - 1; i < this.giaovien.length - 1; i++) {
            // cho danh sách hiện tại = danh sách phía sau
            this.giaovien[i] = this.giaovien[i + 1]
            // đặt lại id
            this.giaovien[i].id = i + 1
        }

        // trừ kích thước đi 1 sau khi xóa 1 danh sách
        this.giaovien.length--;

        return `đã xóa thông tin giáo viên: ${JSON.stringify(thongTinGiaoVienTruocKhiXoa)}`
    }
}


