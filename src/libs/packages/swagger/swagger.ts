import type { NestFastifyApplication } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const setupSwagger = (app: NestFastifyApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Notes app')
    .setDescription('The notes app API description')
    .setVersion('1.0')
    .build()

  const options = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  }

  const document = SwaggerModule.createDocument(app, config, options)
  SwaggerModule.setup('api', app, document)
}

export { setupSwagger }
