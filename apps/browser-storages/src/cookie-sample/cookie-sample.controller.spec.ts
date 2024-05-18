import { Test, TestingModule } from '@nestjs/testing';
import { CookieSampleController } from './cookie-sample.controller';
import { CookieSampleService } from './cookie-sample.service';

describe('CookieSampleController', () => {
  let controller: CookieSampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CookieSampleController],
      providers: [CookieSampleService],
    }).compile();

    controller = module.get<CookieSampleController>(CookieSampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
