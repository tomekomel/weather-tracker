import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { WeatherAlertsGeneratedEvent } from '../../../domain/events/weather-alerts-generated.event';

@EventsHandler(WeatherAlertsGeneratedEvent)
export class WeatherAlertsGeneratedEventHandler
  implements IEventHandler<WeatherAlertsGeneratedEvent> {
  handle(event: WeatherAlertsGeneratedEvent) {
    console.log('WeatherAlertsGeneratedEvent handling...');
  }
}
