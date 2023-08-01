import { Logger, Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppRepository } from './app.repository'
import { AppService } from './app.service'
import { PrismaService } from './prisma.service'
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, AppRepository, Logger],
})
export class AppModule {}
