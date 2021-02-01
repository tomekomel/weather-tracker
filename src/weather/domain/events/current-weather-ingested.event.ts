import { CurrentWeatherInterface } from '../current-weather.interface';
import { IEvent } from '@nestjs/cqrs';

interface CurrentWeatherIngestedEventProp {
  cityId: number;
  cityName: string;
  currentWeather: CurrentWeatherInterface;
}
export class CurrentWeatherIngestedEvent implements IEvent {
  constructor(private readonly props: CurrentWeatherIngestedEventProp) {}

  getProps(): CurrentWeatherIngestedEventProp {
    return this.props;
  }
}
