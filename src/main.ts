import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips out any properties that aren't in the DTO
      forbidNonWhitelisted: true, // Throws an error if any unknown values are passed
      transform: true, // Automatically transforms payloads to match DTO types
    }),
  );

  await app.listen(3000);
}
bootstrap();
