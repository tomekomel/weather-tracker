import { CurrentWeatherDto } from './dtos/current-weather.dto';

export class IngestCurrentWeatherCommand {
  constructor(private readonly currentWeatherDto: CurrentWeatherDto) {}

  getCurrentWeatherDto(): CurrentWeatherDto {
    return this.currentWeatherDto;
  }
}
