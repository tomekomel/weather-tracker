import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IngestCurrentWeatherCommand } from '../ingest-current-weather.command';

@CommandHandler(IngestCurrentWeatherCommand)
export class IngestCurrentWeatherHandler
  implements ICommandHandler<IngestCurrentWeatherCommand> {
  async execute(command: IngestCurrentWeatherCommand) {
    console.log(command);
  }
}
