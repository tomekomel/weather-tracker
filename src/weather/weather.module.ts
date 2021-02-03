import { Module } from '@nestjs/common';
import { WeatherController } from './user-interface/weather.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { WeatherRepository } from './infrastructure/command/repositories/weather.repository';
import { commandHandlers } from './application/command/handlers';
import { MongooseModule } from '@nestjs/mongoose';
import { digestedWeatherSchema } from './infrastructure/models/schemas/digested-weather.schema';
import { eventHandlers } from './infrastructure/command/event-handlers';
import { cityAlertsSchema } from './infrastructure/models/schemas/city-alerts.schema';
import { queryHandlers } from './application/query/handlers';
import { CityAlertsQuery } from './infrastructure/query/city-alerts.query';
import { CityAlertsReadModelRepository } from './infrastructure/command/repositories/city-alerts-read-model.repository';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: 'DigestedWeather', schema: digestedWeatherSchema },
      { name: 'CityAlerts', schema: cityAlertsSchema },
    ]),
  ],
  providers: [
    WeatherRepository,
    ...commandHandlers,
    ...eventHandlers,
    ...queryHandlers,
    CityAlertsQuery,
    CityAlertsReadModelRepository,
  ],
  controllers: [WeatherController],
})
export class WeatherModule {}
