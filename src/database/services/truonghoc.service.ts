/* eslint-disable prettier/prettier */
import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { TruongHocEntity } from "../entity/truonghoc.entity";


@Injectable()
export class TruongHocService {
    constructor(
        @Inject('TRUONGHOC_REPOSITORY')
        private truongHocRepository: Repository<TruongHocEntity>,
    ) { }

    async findAll(): Promise<TruongHocEntity[]> {

        const a = this.truongHocRepository.query(`select * from HocSinh`);
        console.log(a);

        return this.truongHocRepository.find()
    }
}