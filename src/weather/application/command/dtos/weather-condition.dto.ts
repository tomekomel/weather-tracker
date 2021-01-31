import { IsNotEmpty, IsString } from 'class-validator';

export class WeatherConditionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  icon: string;
}
