import { IEvent } from '@nestjs/cqrs';

export interface WeatherAlertsGeneratedEventProps {
  cityId: number;
  alerts: string[];
}

export class WeatherAlertsGeneratedEvent implements IEvent {
  constructor(private readonly props: WeatherAlertsGeneratedEventProps) {}

  getProps(): WeatherAlertsGeneratedEventProps {
    return this.props;
  }
}
