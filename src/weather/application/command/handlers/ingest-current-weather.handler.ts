import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { IngestCurrentWeatherCommand } from '../ingest-current-weather.command';
import { Weather } from '../../../domain';
import { WeatherRepository } from '../../../infrastructure/command/repositories/weather.repository';

@CommandHandler(IngestCurrentWeatherCommand)
export class IngestCurrentWeatherHandler
  implements ICommandHandler<IngestCurrentWeatherCommand> {
  constructor(
    private readonly weatherRepository: WeatherRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: IngestCurrentWeatherCommand) {
    const weather = this.publisher.mergeObjectContext(new Weather());

    weather.ingest(command.getCurrentWeatherDto());
    await this.weatherRepository.saveWeather(weather);

    weather.commit();
  }
}
