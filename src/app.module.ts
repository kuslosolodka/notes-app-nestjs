import { Logger, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma.service'
import { AppRepository } from './app.repository'
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, AppRepository, Logger],
})
export class AppModule {}
