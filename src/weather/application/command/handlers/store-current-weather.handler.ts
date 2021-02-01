import { CommandHandler, IEventHandler } from '@nestjs/cqrs';
import { IngestCurrentWeatherCommand } from '../ingest-current-weather.command';

@CommandHandler(IngestCurrentWeatherCommand)
export class StoreCurrentWeatherHandler implements IEventHandler {
  handle(command: IngestCurrentWeatherCommand) {
    console.log(command);
  }
}
