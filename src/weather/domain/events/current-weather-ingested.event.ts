import { CurrentWeatherParameters } from '../current-weather.parameters';
import { IEvent } from '@nestjs/cqrs';

export class CurrentWeatherIngestedEvent implements IEvent {
  constructor(private readonly props: CurrentWeatherParameters) {}

  getProps(): CurrentWeatherParameters {
    return this.props;
  }
}
