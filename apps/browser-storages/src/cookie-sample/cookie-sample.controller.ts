import { Controller, Get } from '@nestjs/common';
import { CookieSampleService } from './cookie-sample.service';
import { Cookies } from '../common/decorators/cookies.decorator';

@Controller('cookie-sample')
export class CookieSampleController {
  constructor(private readonly cookieSampleService: CookieSampleService) {}

  @Get()
  // cookie 의 이름을 test 로 설정을 한 후에 값을 넣어야 한다.
  // ex) test=helo; Path=/; Expires=Sun, 18 May 2025 13:06:10 GMT;
  getCookie(@Cookies('test') cookieValue: string) {
    console.log('Cookie Value:', cookieValue);
    return cookieValue;
  }

  @Get('all-cookies')
  getAllCookies(@Cookies() cookies: any) {
    console.log('All Cookies:', cookies);
    return cookies;
  }
}
