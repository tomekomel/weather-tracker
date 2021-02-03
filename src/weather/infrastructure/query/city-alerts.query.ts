import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CityAlertsParameters } from '../../domain/city-alerts.parameters';

export class CityAlertsQuery {
  constructor(
    @InjectModel('CityAlerts')
    private readonly cityAlertsModel: Model<CityAlertsParameters & Document>,
  ) {}

  async getAlertsByCity(cityId: number): Promise<CityAlertsParameters[]> {
    return this.cityAlertsModel.find({ cityId }, '-_id -__v').lean();
  }
}
