import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'

import { AppModule } from './app.module'
import { setupSwagger } from './libs/packages/swagger/swagger'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  setupSwagger(app)
  app.enableShutdownHooks()
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000)
}

void bootstrap()
