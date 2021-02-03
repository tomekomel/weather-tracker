import { Schema } from 'mongoose';

export const digestedWeatherSchema = new Schema({
  cityId: Number,
  cityName: String,
  weatherConditions: [
    {
      title: String,
      description: String,
      icon: String,
    },
  ],
  mainParameters: {
    temperature: Number,
    temperatureFeels: Number,
    temperatureMin: Number,
    temperatureMax: Number,
    pressure: Number,
    humidity: Number,
  },
  visibility: Number,
  wind: {
    speed: Number,
    direction: Number,
  },
  clouds: {
    all: Number,
  },
  calculationTime: Number,
  alerts: [String],
});
