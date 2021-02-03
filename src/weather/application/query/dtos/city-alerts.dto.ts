import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CityAlertsDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  cityId: number;

  @IsArray()
  @ApiProperty({ isArray: true })
  alerts: string[];
}
