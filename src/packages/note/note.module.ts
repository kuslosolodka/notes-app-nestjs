import { Logger, Module } from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { NoteController } from './note.controller'
import { NoteRepository } from './note.repository'
import { NoteService } from './note.service'
@Module({
  imports: [],
  controllers: [NoteController],
  providers: [NoteService, PrismaService, NoteRepository, Logger],
})
export class NoteModule {}
