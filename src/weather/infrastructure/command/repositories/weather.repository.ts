import { Injectable } from '@nestjs/common';
import { CurrentWeatherInterface } from '../../../domain/current-weather.interface';

@Injectable()
export class WeatherRepository {
  constructor(
  ) {}

  async saveWeather(currentWeather: CurrentWeatherInterface) {
  }
}
