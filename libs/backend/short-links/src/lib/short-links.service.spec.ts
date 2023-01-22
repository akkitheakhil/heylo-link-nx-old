import { Test } from '@nestjs/testing';
import { ShortLinksService } from './short-links.service';

describe('ShortLinksService', () => {
  let service: ShortLinksService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ShortLinksService],
    }).compile();

    service = module.get(ShortLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
