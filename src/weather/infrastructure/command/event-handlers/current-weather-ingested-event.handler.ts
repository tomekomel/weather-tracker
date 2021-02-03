import { CurrentWeatherIngestedEvent } from '../../../domain/events/current-weather-ingested.event';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CurrentWeatherIngestedEvent)
export class CurrentWeatherIngestedEventHandler
  implements IEventHandler<CurrentWeatherIngestedEvent> {
  handle(event: CurrentWeatherIngestedEvent) {
    console.log('CurrentWeatherIngestedEvent handling...');
  }
}
