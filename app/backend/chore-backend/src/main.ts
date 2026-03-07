import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config({ path: 'src/.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET'],
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${process.env.PORT}`);
}
bootstrap();
