import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MainParametersDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  temperature: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  temperatureFeels: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  temperatureMin: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  temperatureMax: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  pressure: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  humidity: number;
}
