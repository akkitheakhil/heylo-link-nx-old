import { Test } from '@nestjs/testing';
import { ShortLinksController } from './short-links.controller';
import { ShortLinksService } from './short-links.service';

describe('ShortLinksController', () => {
  let controller: ShortLinksController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ShortLinksService],
      controllers: [ShortLinksController],
    }).compile();

    controller = module.get(ShortLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
