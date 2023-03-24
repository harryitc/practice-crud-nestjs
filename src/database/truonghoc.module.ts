/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { truonghocProviders } from "./providers/truonghoc.providers";
import { TruongHocService } from "./services/truonghoc.service";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...truonghocProviders,
        TruongHocService
    ],
})

export class TruongHocModule { }