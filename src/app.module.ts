import { join } from 'node:path'

import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'

import { NoteModule } from './packages/note/note.module'

@Module({
  imports: [
    NoteModule,
    ServeStaticModule.forRoot({
      // eslint-disable-next-line unicorn/prefer-module
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
