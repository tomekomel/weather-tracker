import { Module } from '@nestjs/common';
import { WeatherController } from './user-interface/weather.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { WeatherRepository } from './infrastructure/command/repositories/weather.repository';
import { commandHandlers } from './application/command/handlers';

@Module({
  imports: [
    CqrsModule,
  ],
  providers: [WeatherRepository, ...commandHandlers],
  controllers: [WeatherController],
})
export class WeatherModule {}
