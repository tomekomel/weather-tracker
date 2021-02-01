import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CurrentWeatherDto } from './weather/application/command/dtos/current-weather.dto';
import { CloudsDto } from './weather/application/command/dtos/clouds.dto';
import { MainParametersDto } from './weather/application/command/dtos/main-parameters.dto';
import { WeatherConditionDto } from './weather/application/command/dtos/weather-condition.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Weather Tracker API')
    .setVersion('1.0')
    .addTag('weather')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    extraModels: [
      CurrentWeatherDto,
      CloudsDto,
      MainParametersDto,
      WeatherConditionDto,
    ],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(config.get('APP_PORT'));
}
bootstrap();
