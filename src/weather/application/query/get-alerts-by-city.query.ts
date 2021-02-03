export class GetAlertsByCityQuery {
  constructor(private readonly cityId: number) {}

  getCityId(): number {
    return this.cityId;
  }
}
