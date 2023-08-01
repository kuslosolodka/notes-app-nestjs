import type { Note } from '@prisma/client'

import type { NoteDto } from '../../../../types/dtos/dtos'

const mapToDto = (note: Note): NoteDto => {
  const noteDto: NoteDto = {
    id: note.id,
    name: note.name,
    createdAt: note.createdAt,
    updatedAt: note.updatedAt,
    date: note.date,
    category: note.category,
    content: note.content,
  }
  return noteDto
}

export { mapToDto }
