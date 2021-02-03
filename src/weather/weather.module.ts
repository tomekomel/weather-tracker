import { Module } from '@nestjs/common';
import { WeatherController } from './user-interface/weather.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { WeatherRepository } from './infrastructure/command/repositories/weather.repository';
import { commandHandlers } from './application/command/handlers';
import { MongooseModule } from '@nestjs/mongoose';
import { digestedWeatherSchema } from './infrastructure/models/schemas/digested-weather.schema';
import { eventHandlers } from './infrastructure/command/event-handlers';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: 'DigestedWeather', schema: digestedWeatherSchema },
    ]),
  ],
  providers: [WeatherRepository, ...commandHandlers, ...eventHandlers],
  controllers: [WeatherController],
})
export class WeatherModule {}
