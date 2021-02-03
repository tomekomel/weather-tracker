import { Schema } from 'mongoose';

export const currentWeatherSchema = new Schema({
  cityId: Number,
  cityName: Number,
  currentWeather: {
    weatherConditions: [{
      title: String,
      description: String,
      icon: String,
    }],
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
  },
});
