import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentWeatherDto } from '../application/command/dtos/current-weather.dto';
import { StoreCurrentWeatherCommand } from '../application/command/store-current-weather.command';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Current weather was stored successfully',
  })
  @ApiBadRequestResponse({
    description: 'Response when request was invalid',
  })
  @ApiInternalServerErrorResponse({
    description: 'Response when an unexpected exception was thrown',
  })
  async storeCurrentWeather(@Body() currentWeatherDto: CurrentWeatherDto) {
    await this.commandBus.execute(
      new StoreCurrentWeatherCommand(currentWeatherDto),
    );
  }
}
