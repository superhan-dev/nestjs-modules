import { Test, TestingModule } from '@nestjs/testing';
import { CookieSampleService } from './cookie-sample.service';

describe('CookieSampleService', () => {
  let service: CookieSampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CookieSampleService],
    }).compile();

    service = module.get<CookieSampleService>(CookieSampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
