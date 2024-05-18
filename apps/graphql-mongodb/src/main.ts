import { NestFactory } from '@nestjs/core';
import { GraphqlMongodbModule } from './graphql-mongodb.module';

async function bootstrap() {
  const app = await NestFactory.create(GraphqlMongodbModule);
  await app.listen(3000);
}
bootstrap();
