import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
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
  async storeCurrentWeather(@Body() currentWeatherDto: CurrentWeatherDto) {
    await this.commandBus.execute(
      new StoreCurrentWeatherCommand(currentWeatherDto),
    );
  }
}
