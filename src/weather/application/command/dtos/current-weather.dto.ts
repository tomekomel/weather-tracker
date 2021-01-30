export class CurrentWeatherDto {
  weatherConditions: [
    {
      title: string,
      description: string,
      icon: string,
    }
  ];
  mainParameters: {
    temperature: number,
    temperatureFeels: number,
    temperatureMin: number,
    temperatureMax: number,
    pressure: number,
    humidity: number,
  };
  visibility: number;
  wind: {
    speed: number,
    direction: number,
  };
  clouds: {
    all: number;
  };
  calculationTime: number;
}
