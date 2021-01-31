import { IsNotEmpty, IsNumber } from 'class-validator';

export class MainParametersDto {
  @IsNumber()
  @IsNotEmpty()
  temperature: number;

  @IsNumber()
  @IsNotEmpty()
  temperatureFeels: number;

  @IsNumber()
  @IsNotEmpty()
  temperatureMin: number;

  @IsNumber()
  @IsNotEmpty()
  temperatureMax: number;

  @IsNumber()
  @IsNotEmpty()
  pressure: number;

  @IsNumber()
  @IsNotEmpty()
  humidity: number;
}
