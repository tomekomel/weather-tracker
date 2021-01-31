import { Module } from '@nestjs/common';
import { WeatherController } from './user-interface/weather.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [CommandBus, QueryBus],
  controllers: [WeatherController],
})
export class WeatherModule {}
