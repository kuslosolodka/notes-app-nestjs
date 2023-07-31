import { Logger, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma.service'
import { LoggerModule } from 'nestjs-pino'
import { AppRepository } from './app.repository'
@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            levelFirst: true,
            translateTime: 'UTC:yyyy-mm-dd HH:MM:ss.l o',
          },
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, AppRepository, Logger],
})
export class AppModule {}
