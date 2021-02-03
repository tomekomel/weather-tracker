import { CurrentWeatherIngestedEvent } from '../../../domain';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

@EventsHandler(CurrentWeatherIngestedEvent)
export class CurrentWeatherIngestedEventHandler
  implements IEventHandler<CurrentWeatherIngestedEvent> {
  handle(event: CurrentWeatherIngestedEvent) {
    Logger.log('CurrentWeatherIngestedEvent handling...');
  }
}
