import { CurrentWeatherParameters } from './current-weather.parameters';

export interface DigestedWeatherParameters extends CurrentWeatherParameters {
  alerts: string[];
}
