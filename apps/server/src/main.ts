import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.SERVER_PORT as string)
  await app.useGlobalPipes(new ValidationPipe());
  await app.enableCors({origin: `http://localhost:${process.env.VITE_PORT}`})
  await app.listen(port | 3000);
}
bootstrap();
