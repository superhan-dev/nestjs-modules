import { Controller, Get } from '@nestjs/common';
import { BrowserStoragesService } from './browser-storages.service';

@Controller()
export class BrowserStoragesController {
  constructor(private readonly browserStoragesService: BrowserStoragesService) {}

  @Get()
  getHello(): string {
    return this.browserStoragesService.getHello();
  }
}
