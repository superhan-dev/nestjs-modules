import { Module } from '@nestjs/common';
import { UploaderController } from './uploader.controller';
import { UploaderService } from './uploader.service';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UploadModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/uploader/.env',
    }),
  ],
  controllers: [UploaderController],
  providers: [UploaderService],
})
export class UploaderModule {}
