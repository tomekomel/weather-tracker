import { Document } from 'mongoose';
import { CurrentWeatherInterface } from '../../domain/current-weather.interface';

export interface CurrentWeatherDocument extends Document {
  cityId: number;
  cityName: string;
  currentWeather: CurrentWeatherInterface;
}
