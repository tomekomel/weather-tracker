import { Connection } from 'mongoose';
import { currentWeatherSchema } from './schemas/current-weather.schema';

export const currentWeatherModel = {
  provide: 'CurrentWeatherModel',
  useFactory: (connection: Connection) =>
    connection.model('currentWeather', currentWeatherSchema),
};
