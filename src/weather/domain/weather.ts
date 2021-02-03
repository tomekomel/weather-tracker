import { CurrentWeatherParameters } from './current-weather.parameters';
import { AggregateRoot } from '@nestjs/cqrs';
import { CurrentWeatherIngestedEvent } from './events/current-weather-ingested.event';

export class Weather extends AggregateRoot {
  private currentWeather: CurrentWeatherParameters;

  constructor() {
    super();
  }

  ingest(currentWeather: CurrentWeatherParameters) {
    this.apply(new CurrentWeatherIngestedEvent(currentWeather));
  }

  onCurrentWeatherIngestedEvent(event: CurrentWeatherIngestedEvent) {
    this.currentWeather = event.getProps();
  }

  getCurrentWeather(): CurrentWeatherParameters {
    return this.currentWeather;
  }
}
