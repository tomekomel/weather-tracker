import { Module } from '@nestjs/common';
import { WeatherController } from './user-interface/weather.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Module({
  providers: [CommandBus, QueryBus],
  controllers: [WeatherController],
})
export class WeatherModule {}
