import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { Note as NoteModel } from '@prisma/client'

import { ZodValidationPipe } from '../pipes/zod-validation.pipe'
import { NoteService } from './note.service'
import {
  NoteCreateRequestDto,
  NoteCreateResponseDto,
  NoteDeleteResponseDto,
  NoteGetAllItemsResponseDto,
  NoteGetOneItemRequestDto,
  NoteGetOneItemResponseDto,
  NoteUpdateRequestDto,
  NoteUpdateResponseDto,
} from './types/dtos/dtos'
import { NoteRouteParametersSchema } from './types/validation-schemas/note-route-parameters.validation-schema'
import {
  NoteCreateSchema,
  NoteUpdateSchema,
} from './types/validation-schemas/validation-schemas'

interface StatsResult {
  totalNotes: number
  notesByCategory: Record<string, number>
}

@Controller('api/notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  async getNotes(): Promise<NoteGetAllItemsResponseDto[]> {
    return this.noteService.findNotes()
  }

  @Get(':id')
  async getNoteById(
    @Param('id', new ZodValidationPipe(NoteRouteParametersSchema))
    id: NoteGetOneItemRequestDto
  ): Promise<NoteGetOneItemResponseDto> {
    return this.noteService.findNote({ id: Number(id) })
  }

  @Post()
  async createNote(
    @Body(new ZodValidationPipe(NoteCreateSchema))
    { name, date, content, category }: NoteCreateRequestDto
  ): Promise<NoteCreateResponseDto> {
    const parsedDate = new Date(date.split('-').reverse().join('-'))
    const isoDate = parsedDate.toISOString()
    return this.noteService.createNote({
      name,
      date: isoDate,
      category,
      content,
    })
  }

  @Patch(':id')
  async updatePost(
    @Param('id', new ZodValidationPipe(NoteRouteParametersSchema))
    id: NoteGetOneItemRequestDto,
    @Body(new ZodValidationPipe(NoteUpdateSchema))
    { name, date, content, category }: NoteUpdateRequestDto
  ): Promise<NoteUpdateResponseDto> {
    return this.noteService.updateNote({
      where: { id: Number(id) },
      data: { name, date, content, category },
    })
  }

  @Delete(':id')
  async deletePost(
    @Param('id', new ZodValidationPipe(NoteRouteParametersSchema))
    id: NoteGetOneItemRequestDto
  ): Promise<NoteDeleteResponseDto> {
    return this.noteService.deleteNote({ id: Number(id) })
  }

  @Get('stats')
  async getNotesStats(): Promise<StatsResult> {
    const notes = await this.noteService.findNotes()
    return this.calculateNotesStats(notes)
  }

  private calculateNotesStats(notes: NoteModel[]): StatsResult {
    const totalNotes = notes.length

    const notesByCategory: Record<string, number> = {}
    for (const note of notes) {
      const { category } = note
      notesByCategory[category] = (notesByCategory[category] || 0) + 1
    }

    return {
      totalNotes,
      notesByCategory,
    }
  }
}
