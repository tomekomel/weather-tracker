import { Module } from '@nestjs/common';
import { WeatherController } from './user-interface/weather.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { WeatherRepository } from './infrastructure/command/repositories/weather.repository';
import { commandHandlers } from './application/command/handlers';
import { MongooseModule } from '@nestjs/mongoose';
import { currentWeatherSchema } from './infrastructure/models/schemas/current-weather.schema';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: 'CurrentWeather', schema: currentWeatherSchema }]),
  ],
  providers: [WeatherRepository, ...commandHandlers],
  controllers: [WeatherController],
})
export class WeatherModule {}
