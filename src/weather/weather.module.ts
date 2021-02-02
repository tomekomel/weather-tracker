import { Module } from '@nestjs/common';
import { WeatherController } from './user-interface/weather.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ConfigModule } from '@nestjs/config';
import { WeatherRepository } from './infrastructure/command/repositories/weather.repository';
import { commandHandlers } from './application/command/handlers';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CqrsModule],
  providers: [
    WeatherRepository,
    ...commandHandlers,
  ],
  controllers: [WeatherController],
})
export class WeatherModule {}
