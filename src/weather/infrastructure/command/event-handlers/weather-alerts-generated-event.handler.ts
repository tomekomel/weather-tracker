import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { WeatherAlertsGeneratedEvent } from '../../../domain/events/weather-alerts-generated.event';
import { CityAlertsRepository } from '../repositories/city-alerts.repository';
import { Logger } from '@nestjs/common';

@EventsHandler(WeatherAlertsGeneratedEvent)
export class WeatherAlertsGeneratedEventHandler
  implements IEventHandler<WeatherAlertsGeneratedEvent> {
  constructor(private readonly cityAlertsRepository: CityAlertsRepository) {}

  handle(event: WeatherAlertsGeneratedEvent) {
    this.cityAlertsRepository.saveAlerts(event.getProps());
    Logger.log('WeatherAlertsGeneratedEvent handling...');
  }
}
