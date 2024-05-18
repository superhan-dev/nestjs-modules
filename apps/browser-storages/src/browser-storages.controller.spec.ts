import { Test, TestingModule } from '@nestjs/testing';
import { BrowserStoragesController } from './browser-storages.controller';
import { BrowserStoragesService } from './browser-storages.service';

describe('BrowserStoragesController', () => {
  let browserStoragesController: BrowserStoragesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BrowserStoragesController],
      providers: [BrowserStoragesService],
    }).compile();

    browserStoragesController = app.get<BrowserStoragesController>(BrowserStoragesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(browserStoragesController.getHello()).toBe('Hello World!');
    });
  });
});
