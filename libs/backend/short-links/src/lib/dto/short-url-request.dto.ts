import { ApiProperty } from '@nestjs/swagger';
import { IsUrl } from 'class-validator';

export class CreateShortUrlRequestDTO {
  @IsUrl()
  @ApiProperty({ type: 'string' })
  url: string | undefined;
}
