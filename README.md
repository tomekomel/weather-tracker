## Weather Tracker API

This tiny project is a REST API for consuming weather from:
https://openweathermap.org/appid

The Project is built with the NestJS framework. It tries to follow DDD approach, CQRS pattern and Event Driven architecture. Partially it also follows the Event Sourcing pattern by using aggregates, storing events and delegating some side effects to event handlers. It has also one read model `City Alerts` for storing and presenting weather alerts for cities.
It has also some domain logic in weather aggregate class.

## Running the app

```bash
$ docker-compose up
```

## Swagger Documentation

After installation Swagger API is available on:
http://localhost:8787/api


## Stay in touch

- Author - [Tomasz Omeljaniuk](https://github.com/tomekomel)

## License

  Nest is [MIT licensed](LICENSE).
