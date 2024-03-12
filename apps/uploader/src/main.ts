import { NestFactory } from '@nestjs/core';
import { UploaderModule } from './uploader.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(UploaderModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');

  await app.listen(port);

  console.log(`Server running with port ${port}`);
}
bootstrap();
