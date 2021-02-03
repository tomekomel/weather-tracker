import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CityAlertsParameters } from '../../../domain/city-alerts.parameters';

@Injectable()
export class CityAlertsReadModelRepository {
  constructor(
    @InjectModel('CityAlerts')
    private readonly cityAlertsModel: Model<CityAlertsParameters & Document>,
  ) {}

  async saveAlerts(cityAlerts: CityAlertsParameters) {
    await this.cityAlertsModel.findOneAndUpdate(
      { cityId: cityAlerts.cityId },
      { $addToSet: { alerts: { $each: cityAlerts.alerts } } },
      { useFindAndModify: true, new: true, upsert: true },
    );
  }
}
