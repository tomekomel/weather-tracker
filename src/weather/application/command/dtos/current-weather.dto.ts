import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { MainParametersDto } from './main-parameters.dto';
import { Type } from 'class-transformer';
import { WeatherConditionDto } from './weather-condition.dto';

export class CurrentWeatherDto {
  @IsArray()
  weatherConditions: WeatherConditionDto[];

  @Type(() => MainParametersDto)
  @ValidateNested()
  mainParameters: MainParametersDto;

  @IsNumber()
  @IsNotEmpty()
  visibility: number;

  wind: {
    speed: number;
    direction: number;
  };

  clouds: {
    all: number;
  };

  @IsNumber()
  @IsNotEmpty()
  calculationTime: number;
}
