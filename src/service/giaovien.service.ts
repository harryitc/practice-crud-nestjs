/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { dataGiaoVien } from 'src/data_giaovien';
import { GiaoVien } from 'src/giaovien';

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
            return `Lỗi! không tìm thấy id này`
        }

        // Nếu có
        return this.giaovien[id - 1];
    }

    // xóa toàn bộ danh sách giáo viên
    xoaDanhSachGiaoVien() {
        this.giaovien = []
        console.log('danh sách hiện tại là: ', this.giaovien)
        return `đã xóa toàn bộ danh sách giáo viên`
    }

    // thêm 1 giáo viên
    themGiaoVien(giaovien) {
        this.giaovien.push(giaovien)
        return giaovien
    }

    // xóa 1 giáo viên nào đó{
    xoaThongTinGiaoVien(id) {
        // Trước khi tìm id, chúng ta phải
        // Tìm xem trong danh sách có id này không?
        const found = this.giaovien.findIndex((idgiaovien: GiaoVien) => idgiaovien.id == id)

        // Nếu không
        if (found == -1) {
            console.log(`Lỗi! không tìm thấy id này`);
            return `Lỗi! không tìm thấy id này`
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

        console.log('Danh sách hiện tại: ', this.giaovien);
        return `đã xóa thông tin sinh viên: `
    }
}


