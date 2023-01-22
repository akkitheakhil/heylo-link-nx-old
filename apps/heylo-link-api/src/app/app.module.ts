import { ShortLinksModule } from '@heylo-link/backend/short-links';
import { Module } from '@nestjs/common';

@Module({
  imports: [ShortLinksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
