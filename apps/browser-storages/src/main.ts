import { NestFactory } from '@nestjs/core';
import { BrowserStoragesModule } from './browser-storages.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(BrowserStoragesModule);
  // somewhere in your initialization file
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
