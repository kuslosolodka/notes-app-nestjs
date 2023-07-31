import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

import { setupSwagger } from './libs/packages/swagger/swagger'
import { Logger } from 'nestjs-pino'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bufferLogs: true }
  )
  setupSwagger(app)
  app.useLogger(app.get(Logger))
  app.enableShutdownHooks()
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000)
}

bootstrap()
