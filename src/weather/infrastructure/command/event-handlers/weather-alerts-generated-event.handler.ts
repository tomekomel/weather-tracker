import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { WeatherAlertsGeneratedEvent } from '../../../domain/events/weather-alerts-generated.event';
import { CityAlertsReadModelRepository } from '../repositories/city-alerts-read-model.repository';
import { Logger } from '@nestjs/common';

@EventsHandler(WeatherAlertsGeneratedEvent)
export class WeatherAlertsGeneratedEventHandler
  implements IEventHandler<WeatherAlertsGeneratedEvent> {
  constructor(private readonly cityAlertsRepository: CityAlertsReadModelRepository) {}

  handle(event: WeatherAlertsGeneratedEvent) {
    this.cityAlertsRepository.saveAlerts(event.getProps());
    Logger.log('WeatherAlertsGeneratedEvent handling...');
  }
}
