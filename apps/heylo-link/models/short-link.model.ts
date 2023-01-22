import { Slugs } from '@prisma/client';

export type ShortLink = Pick<Slugs, 'slug' | 'url'>;
