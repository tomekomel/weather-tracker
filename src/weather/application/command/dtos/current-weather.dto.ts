import { ApiProperty } from '@nestjs/swagger';
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
import { CloudsDto } from './clouds.dto';
import { WindDto } from './wind.dto';

export class CurrentWeatherDto {
  @IsArray()
  @ApiProperty({ type: [WeatherConditionDto] })
  weatherConditions: WeatherConditionDto[];

  @Type(() => MainParametersDto)
  @ValidateNested()
  @ApiProperty({ type: MainParametersDto })
  mainParameters: MainParametersDto;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  visibility: number;

  @Type(() => WindDto)
  @ValidateNested()
  @ApiProperty({ type: WindDto })
  wind: WindDto;

  @Type(() => CloudsDto)
  @ValidateNested()
  @ApiProperty({ type: CloudsDto })
  clouds: CloudsDto;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  calculationTime: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  cityId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string' })
  cityName: string;
}
