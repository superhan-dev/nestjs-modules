import {
  Controller,
  // FileTypeValidator,
  // MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
// import { Throttle } from '@nestjs/throttler';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadeService: UploadService) {}

  // @Throttle({ default: { limit: 3, ttl: 60000 } })
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 1000 }),
          // new FileTypeValidator({ fileType: 'application/pdf' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    await this.uploadeService.upload(file.originalname, file.buffer);
  }
}
