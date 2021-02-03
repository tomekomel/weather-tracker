import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { Weather } from '../../../domain/weather';
import { DigestedWeatherParameters } from '../../../domain/digested-weather.parameters';

@Injectable()
export class WeatherRepository {
  constructor(
    @InjectModel('DigestedWeather')
    private readonly digestedWeatherModel: Model<
      DigestedWeatherParameters & Document
    >,
  ) {}

  async saveWeather(weather: Weather) {
    const digestedWeather = await new this.digestedWeatherModel(
      weather.getDigestedWeather(),
    );
    await digestedWeather.save();
  }
}
