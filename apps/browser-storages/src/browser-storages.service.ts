import { Injectable } from '@nestjs/common';

@Injectable()
export class BrowserStoragesService {
  getHello(): string {
    return 'Hello World!';
  }
}
