import { slugsUUID } from '@heylo-link/common/heylo-utilities';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Slugs } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ShortLinksService {
  public createSlug(url: string): Promise<Partial<Slugs>> {
    const slug = slugsUUID();
    const data: Prisma.SlugsCreateInput = {
      slug,
      url,
    };

    return prisma.slugs.create({
      data,
      select: {
        slug: true,
      },
    });
  }

  public async getSlug(slug: string): Promise<Partial<Slugs>> {
    const result = await prisma.slugs.findUnique({
      where: {
        slug,
      },
      select: {
        slug: true,
        url: true,
      },
    });

    if (result) {
      return result;
    }

    throw new HttpException(
      `No URL with Slug: ${slug} found`,
      HttpStatus.BAD_REQUEST
    );
  }
}
