import { Module } from '@nestjs/common'

import { NoteModule } from './packages/note/note.module'
@Module({
  imports: [NoteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
