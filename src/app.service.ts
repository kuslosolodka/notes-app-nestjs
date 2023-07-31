import { Injectable, Logger, NotFoundException } from '@nestjs/common'

import { AppRepository } from './app.repository'
import type {
  NoteCreateRequestDto,
  NoteCreateResponseDto,
  NoteDeleteResponseDto,
  NoteGetAllItemsResponseDto,
  NoteGetOneItemRequestDto,
  NoteGetOneItemResponseDto,
  NoteUpdateRequestDto,
  NoteUpdateResponseDto,
} from './types/dtos/dtos'
import { mapToDto } from './helpers/map-to-dto/map-to-dto.helper'

@Injectable()
class AppService {
  constructor(
    private readonly appRepository: AppRepository,
    private readonly logger: Logger
  ) {}

  async findNote(
    NoteWhereUniqueInput: NoteGetOneItemRequestDto
  ): Promise<NoteGetOneItemResponseDto | null> {
    const note = await this.appRepository.find(NoteWhereUniqueInput)
    if (note) {
      this.logger.log(`Found note with ID ${note.id}`, { note })
      return mapToDto(note)
    }
    throw new NotFoundException('Note not found')
  }

  async findNotes(): Promise<NoteGetAllItemsResponseDto[]> {
    const notes = await this.appRepository.findAll({})
    this.logger.log(`Retrieved ${notes.length} notes`, { notes })
    return notes.map((note) => mapToDto(note))
  }

  async createNote(data: NoteCreateRequestDto): Promise<NoteCreateResponseDto> {
    const createdNote = await this.appRepository.create(data)
    this.logger.log(`Created note with ID ${createdNote.id}`, {
      createdNote,
    })
    return mapToDto(createdNote)
  }

  async updateNote(parameters: {
    data: NoteUpdateRequestDto
    where: NoteGetOneItemRequestDto
  }): Promise<NoteUpdateResponseDto> {
    const updatedNote = await this.appRepository.update(parameters)
    this.logger.log(`Updated note with ID ${updatedNote.id}`, {
      updatedNote,
    })
    return mapToDto(updatedNote)
  }

  async deleteNote(
    where: NoteGetOneItemRequestDto
  ): Promise<NoteDeleteResponseDto> {
    const deletedNote = await this.appRepository.delete(where)
    this.logger.log(`Deleted note with ID ${deletedNote.id}`, {
      deletedNote,
    })
    return mapToDto(deletedNote)
  }
}

export { AppService }
