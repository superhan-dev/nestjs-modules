import { Injectable } from '@nestjs/common';

@Injectable()
export class CookieSampleService {
  getCookies() {
    return 'Hello cookie test';
  }
}
