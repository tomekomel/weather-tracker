import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { WeatherAlertsGeneratedEvent } from '../../../domain/events/weather-alerts-generated.event';
import { CityAlertsRepository } from '../repositories/city-alerts.repository';

@EventsHandler(WeatherAlertsGeneratedEvent)
export class WeatherAlertsGeneratedEventHandler
  implements IEventHandler<WeatherAlertsGeneratedEvent> {
  constructor(private readonly cityAlertsRepository: CityAlertsRepository) {}

  handle(event: WeatherAlertsGeneratedEvent) {
    this.cityAlertsRepository.saveAlerts(event.getProps());
    console.log('WeatherAlertsGeneratedEvent handling...');
  }
}
