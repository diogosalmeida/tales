import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const server_port: number = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(server_port);
}
bootstrap();
