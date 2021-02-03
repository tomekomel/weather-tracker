import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentWeatherDto } from '../application/command/dtos/current-weather.dto';
import { IngestCurrentWeatherCommand } from '../application/command/ingest-current-weather.command';
import { GetAlertsByCityQuery } from '../application/query/get-alerts-by-city.query';

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
  async ingestCurrentWeather(@Body() currentWeatherDto: CurrentWeatherDto) {
    return this.commandBus.execute(
      new IngestCurrentWeatherCommand(currentWeatherDto),
    );
  }

  @Get('cities/:id/alerts')
  @HttpCode(200)
  @ApiOkResponse({
    description: 'Response with alerts',
  })
  @ApiInternalServerErrorResponse({
    description: 'Response when an unexpected exception was thrown',
  })
  async getAlertsByCity(@Param('id', ParseIntPipe) cityId: number) {
    return this.queryBus.execute(new GetAlertsByCityQuery(cityId));
  }
}
