import { CurrentWeatherParameters } from './current-weather.parameters';
import { AggregateRoot } from '@nestjs/cqrs';
import { CurrentWeatherIngestedEvent } from './events/current-weather-ingested.event';
import { DigestedWeatherParameters } from './digested-weather.parameters';

export class Weather extends AggregateRoot {
  private digestedWeather: DigestedWeatherParameters;

  private readonly alertRules: AlertRules[] = [
    {
      name: 'Boiling Hot Alert',
      validationRule: (currentWeather: CurrentWeatherParameters) =>
        currentWeather.mainParameters.temperatureFeels > 32,
      alertMessage: 'Be careful! It is boiling hot today!',
    },
    {
      name: 'Freezing Cold Alert',
      validationRule: (currentWeather: CurrentWeatherParameters) =>
        currentWeather.mainParameters.temperatureFeels < -10,
      alertMessage: 'Be careful! It is freezing cold today!',
    },
  ];

  constructor() {
    super();
  }

  ingest(currentWeather: CurrentWeatherParameters) {
    this.apply(new CurrentWeatherIngestedEvent(currentWeather));
  }

  onCurrentWeatherIngestedEvent(event: CurrentWeatherIngestedEvent) {
    this.digestedWeather = {
      ...event.getProps(),
      alerts: this.generateAlerts(event.getProps()),
    };
  }

  generateAlerts(currentWeather: CurrentWeatherParameters) {
    return this.alertRules.map(alertRule => {
      if (alertRule.validationRule(currentWeather)) {
        return alertRule.alertMessage;
      }
    });
  }

  getDigestedWeather(): CurrentWeatherParameters {
    return this.digestedWeather;
  }
}

interface AlertRules {
  name: string;
  validationRule: (currentWeather: CurrentWeatherParameters) => boolean;
  alertMessage: string;
}
