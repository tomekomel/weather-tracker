import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IngestCurrentWeatherCommand } from '../ingest-current-weather.command';
import { Weather } from '../../../domain/weather';
import { WeatherRepository } from '../../../infrastructure/repositories/weather.repository';

@CommandHandler(IngestCurrentWeatherCommand)
export class IngestCurrentWeatherHandler
  implements ICommandHandler<IngestCurrentWeatherCommand> {
  constructor(private readonly weatherRepository: WeatherRepository) {}

  async execute(command: IngestCurrentWeatherCommand) {
    const { cityId, cityName } = command.getCurrentWeatherDto();
    const weather = new Weather(cityId, cityName);
    weather.ingest(command.getCurrentWeatherDto());

    console.log('Command executed: ', command);
    await this.weatherRepository.saveWeather(weather);
  }
}
