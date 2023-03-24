import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  await app.listen(PORT, () => {
    console.log(`>>> Connect port: ${PORT}`);
  });
}
bootstrap();
