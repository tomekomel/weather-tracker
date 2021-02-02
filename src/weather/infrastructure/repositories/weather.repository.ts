import { Injectable } from '@nestjs/common';
import { Weather } from '../../domain/weather';

@Injectable()
export class WeatherRepository {
  constructor() {}

  async saveWeather(weather: Weather) {}
}
