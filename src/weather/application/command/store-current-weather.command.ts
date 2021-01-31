import { CurrentWeatherDto } from './dtos/current-weather.dto';

export class StoreCurrentWeatherCommand {
  constructor(private readonly currentWeatherDto: CurrentWeatherDto) {}

  getCurrentWeatherDto(): CurrentWeatherDto {
    return this.currentWeatherDto;
  }
}
