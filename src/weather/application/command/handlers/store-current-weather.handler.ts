import { CommandHandler, IEventHandler } from '@nestjs/cqrs';
import { StoreCurrentWeatherCommand } from '../store-current-weather.command';

@CommandHandler(StoreCurrentWeatherCommand)
export class StoreCurrentWeatherHandler implements IEventHandler {
  handle(command: StoreCurrentWeatherCommand) {
    console.log(command);
  }
}
