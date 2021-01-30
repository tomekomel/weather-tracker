import { Module } from '@nestjs/common';
import { WeatherController } from './user-interface/weather.controller';

@Module({
  controllers: [WeatherController]
})
export class WeatherModule {}
