import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common'
import { AppService } from './app.service'
import { Note as NoteModel } from '@prisma/client'
import { NoteCreateRequestDto, NoteUpdateRequestDto } from './types/dtos/dtos'

interface StatsResult {
  totalNotes: number
  notesByCategory: Record<string, number>
}

@Controller('api/notes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getNotes(): Promise<NoteModel[]> {
    return this.appService.findNotes({})
  }

  @Get(':id')
  async getNoteById(@Param('id') id: string): Promise<NoteModel> {
    return this.appService.findNote({ id: Number(id) })
  }

  @Post()
  async createNote(
    @Body() { name, date, content, category }: NoteCreateRequestDto
  ): Promise<NoteModel> {
    const parsedDate = new Date(date.split('-').reverse().join('-'))
    return this.appService.createNote({
      name,
      date: parsedDate,
      category,
      content,
    })
  }

  @Patch(':id')
  async updatePost(
    @Param('id') id: string,
    @Body()
    { name, date, content, category }: NoteUpdateRequestDto
  ): Promise<NoteModel> {
    return this.appService.updateNote({
      where: { id: Number(id) },
      data: { name, date, content, category },
    })
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<NoteModel> {
    return this.appService.deleteNote({ id: Number(id) })
  }

  @Get('stats')
  async getNotesStats(): Promise<StatsResult> {
    const notes = await this.appService.findNotes({})
    const stats = this.calculateNotesStats(notes)
    return stats
  }

  private calculateNotesStats(notes: NoteModel[]): StatsResult {
    const totalNotes = notes.length

    const notesByCategory: Record<string, number> = {}
    notes.forEach((note) => {
      const { category } = note
      notesByCategory[category] = (notesByCategory[category] || 0) + 1
    })

    return {
      totalNotes,
      notesByCategory,
    }
  }
}
