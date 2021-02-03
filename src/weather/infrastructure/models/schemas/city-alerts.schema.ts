import { Schema } from 'mongoose';

export const cityAlertsSchema = new Schema({
  cityId: Number,
  alerts: [String],
});
