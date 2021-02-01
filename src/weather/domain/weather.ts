import { CurrentWeatherInterface } from './current-weather.interface';
import { AggregateRoot } from '@nestjs/cqrs';
import { CurrentWeatherIngestedEvent } from './events/current-weather-ingested.event';

export class Weather extends AggregateRoot {
  constructor(
    private readonly cityId: number,
    private readonly cityName: string,
  ) {
    super();
  }

  ingest(currentWeather: CurrentWeatherInterface) {
    this.apply(
      new CurrentWeatherIngestedEvent({
        cityId: this.cityId,
        cityName: this.cityName,
        currentWeather,
      }),
    );
  }
}
