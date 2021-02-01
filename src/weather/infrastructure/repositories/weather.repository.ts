import { EventStoreDBClient, jsonEvent } from '@eventstore/db-client';
import { Inject, Injectable } from '@nestjs/common';
import { Weather } from '../../domain/weather';
import { CurrentWeatherIngestedEvent } from '../../domain/events/current-weather-ingested.event';
import { JSONType } from '@eventstore/db-client/dist/events/types';

@Injectable()
export class WeatherRepository {
  constructor(
    @Inject('EventStore') private readonly eventStoreClient: EventStoreDBClient,
  ) {}

  async saveWeather(weather: Weather) {
    const streamName = `city-${weather.getCityId()}`;
    const appendResult = await this.eventStoreClient.appendToStream(
      streamName,
      weather.getUncommittedEvents().map(this.mapEventToEventStoreEvent),
    );
  }

  private mapEventToEventStoreEvent(event: CurrentWeatherIngestedEvent) {
    return jsonEvent({
      type: 'grpc-client',
      data: (event.getProps() as unknown) as JSONType,
    });
  }
}
