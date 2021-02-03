import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { GetAlertsByCityQuery } from '../get-alerts-by-city.query';
import { CityAlertsQuery } from '../../../infrastructure/query/city-alerts.query';

@QueryHandler(GetAlertsByCityQuery)
export class GetAlertsByCityQueryHandler
  implements IQueryHandler<GetAlertsByCityQuery> {
  constructor(
    private readonly cityAlertsQuery: CityAlertsQuery,
  ) {}

  async execute(query: GetAlertsByCityQuery) {
    return this.cityAlertsQuery.getAlertsByCity(query.getCityId());
  }
}
