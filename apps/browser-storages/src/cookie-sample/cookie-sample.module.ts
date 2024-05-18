import { Module } from '@nestjs/common';
import { CookieSampleService } from './cookie-sample.service';
import { CookieSampleController } from './cookie-sample.controller';

@Module({
  controllers: [CookieSampleController],
  providers: [CookieSampleService],
})
export class CookieSampleModule {}
