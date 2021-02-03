import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CityAlertsParameters } from '../../../domain/city-alerts.parameters';

@Injectable()
export class CityAlertsRepository {
  constructor(
    @InjectModel('CityAlerts')
    private readonly cityAlertsModel: Model<CityAlertsParameters & Document>,
  ) {}

  async saveAlerts(cityAlerts: CityAlertsParameters) {
    const digestedWeather = await new this.cityAlertsModel(
      cityAlerts,
    );
    await digestedWeather.save();
  }
}
