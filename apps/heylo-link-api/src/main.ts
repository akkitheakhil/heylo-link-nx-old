import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
const { SERVER_PORT, NODE_ENV } = process.env;
const globalPrefix = 'api/';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: `${globalPrefix}`,
    defaultVersion: '1',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: NODE_ENV === 'PRODUCTION' ? true : false,
    })
  );

  app.enableCors();

  if (process.env.NODE_ENV !== 'PRODUCTION') {
    const config = new DocumentBuilder()
      .setTitle('Heylo Link API')
      .setDescription('This is API for heylo-link')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }

  const port = SERVER_PORT ?? 8080;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
