import { Provider } from '@nestjs/common';
import { EventStoreDBClient } from '@eventstore/db-client';

export const eventStoreProvider: Provider = {
  provide: 'EventStore',
  useFactory: (): EventStoreDBClient => {
    return new EventStoreDBClient({
      endpoint: 'localhost:2113',
    });
  },
};
