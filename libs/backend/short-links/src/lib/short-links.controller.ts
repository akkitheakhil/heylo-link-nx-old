import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { Slugs } from '@prisma/client';
import { CreateShortUrlRequestDTO } from './dto/short-url-request.dto';
import { ShortLinksService } from './short-links.service';

@Controller('short-links')
export class ShortLinksController {
  constructor(private shortLinksService: ShortLinksService) {}

  @ApiBody({
    type: CreateShortUrlRequestDTO,
    description: 'URL to create a short link',
  })
  @Post()
  @HttpCode(201)
  createSlug(@Body() body: CreateShortUrlRequestDTO): Promise<Partial<Slugs>> {
    if (body.url) {
      return this.shortLinksService.createSlug(body.url);
    }

    throw new HttpException(`Invalid url`, HttpStatus.BAD_REQUEST);
  }

  @Get('/:slug')
  @HttpCode(200)
  getSlug(@Param('slug') slug: string) {
    return this.shortLinksService.getSlug(slug);
  }
}
