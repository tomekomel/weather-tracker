import { CurrentWeatherParameters } from './current-weather.parameters';
import { AggregateRoot } from '@nestjs/cqrs';
import { CurrentWeatherIngestedEvent } from './events';
import { DigestedWeatherParameters } from './digested-weather.parameters';
import { WeatherAlertsGeneratedEvent } from './events';

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
    const alerts = this.generateAlerts(event.getProps());
    this.digestedWeather = {
      ...event.getProps(),
      alerts,
    };

    if (alerts) {
      this.apply(
        new WeatherAlertsGeneratedEvent({
          cityId: this.digestedWeather.cityId,
          alerts: this.digestedWeather.alerts,
        }),
      );
    }
  }

  generateAlerts(currentWeather: CurrentWeatherParameters): string[] {
    return this.alertRules
      .map(alertRule => {
        if (alertRule.validationRule(currentWeather)) {
          return alertRule.alertMessage;
        }
      })
      .filter(Boolean);
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
