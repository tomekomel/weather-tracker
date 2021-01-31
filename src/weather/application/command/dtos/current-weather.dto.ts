import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { MainParametersDto } from './main-parameters.dto';
import { Type } from 'class-transformer';
import { WeatherConditionDto } from './weather-condition.dto';
import { CloudsDto } from './clouds.dto';
import { WindDto } from './wind.dto';

export class CurrentWeatherDto {
  @IsArray()
  weatherConditions: WeatherConditionDto[];

  @Type(() => MainParametersDto)
  @ValidateNested()
  mainParameters: MainParametersDto;

  @IsNumber()
  @IsNotEmpty()
  visibility: number;

  @Type(() => CloudsDto)
  @ValidateNested()
  wind: {
    speed: number;
    direction: number;
  };

  @Type(() => WindDto)
  @ValidateNested()
  clouds: {
    all: number;
  };

  @IsNumber()
  @IsNotEmpty()
  calculationTime: number;
}
