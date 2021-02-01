import { Module } from '@nestjs/common';
import { WeatherController } from './user-interface/weather.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ConfigModule } from '@nestjs/config';
import { WeatherRepository } from './infrastructure/repositories/weather.repository';
import { eventStoreProvider } from '../common/providers/event-store.provider';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [CommandBus, QueryBus, WeatherRepository, eventStoreProvider],
  controllers: [WeatherController],
})
export class WeatherModule {}
