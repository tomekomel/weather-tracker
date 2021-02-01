import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CloudsDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  all: number;
}
