import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WeatherConditionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string' })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string' })
  icon: string;
}
