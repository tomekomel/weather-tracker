import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { Weather } from '../../../domain/weather';
import { CurrentWeatherParameters } from '../../../domain/current-weather.parameters';

@Injectable()
export class WeatherRepository {
  constructor(
    @InjectModel('CurrentWeather')
    private readonly currentWeatherModel: Model<CurrentWeatherParameters & Document>,
  ) {}

  async saveWeather(weather: Weather) {
    const newDecision = await new this.currentWeatherModel(weather);
    await newDecision.save();

    const all = await this.currentWeatherModel.find().exec();

    console.log('Response ', all);
  }
}
