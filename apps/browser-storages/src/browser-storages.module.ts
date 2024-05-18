import { Module } from '@nestjs/common';
import { BrowserStoragesController } from './browser-storages.controller';
import { BrowserStoragesService } from './browser-storages.service';
import { CookieSampleModule } from './cookie-sample/cookie-sample.module';

@Module({
  imports: [CookieSampleModule],
  controllers: [BrowserStoragesController],
  providers: [BrowserStoragesService],
})
export class BrowserStoragesModule {}
