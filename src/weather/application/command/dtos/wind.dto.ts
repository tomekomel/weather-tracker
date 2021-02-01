import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WindDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  speed: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  direction: number;
}
