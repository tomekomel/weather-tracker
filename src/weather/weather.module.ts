import { Module } from '@nestjs/common';
import { WeatherController } from './user-interface/weather.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ConfigModule } from '@nestjs/config';
import { WeatherRepository } from './infrastructure/repositories/weather.repository';
import { eventStoreProvider } from '../common/providers/event-store.provider';
import { commandHandlers } from './application/command/handlers';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CqrsModule],
  providers: [
    WeatherRepository,
    eventStoreProvider,
    ...commandHandlers,
  ],
  controllers: [WeatherController],
})
export class WeatherModule {}
