import { CurrentWeatherIngestedEventHandler } from './current-weather-ingested-event.handler';
import { WeatherAlertsGeneratedEventHandler } from './weather-alerts-generated-event.handler';

export const eventHandlers = [
  CurrentWeatherIngestedEventHandler,
  WeatherAlertsGeneratedEventHandler,
];
