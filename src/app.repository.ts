import { Injectable } from '@nestjs/common'
import { Note, Prisma } from '@prisma/client'

import { PrismaService } from './prisma.service'

@Injectable()
export class AppRepository {
  constructor(private prisma: PrismaService) {}

  async find(
    noteWhereUniqueInput: Prisma.NoteWhereUniqueInput
  ): Promise<Note | null> {
    return this.prisma.note.findUnique({
      where: noteWhereUniqueInput,
    })
  }

  async findAll(parameters: {
    skip?: number
    take?: number
    cursor?: Prisma.NoteWhereUniqueInput
    where?: Prisma.NoteWhereInput
    orderBy?: Prisma.NoteOrderByWithRelationInput
  }): Promise<Note[]> {
    const { skip, take, cursor, where, orderBy } = parameters
    return this.prisma.note.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async create(data: Prisma.NoteCreateInput): Promise<Note> {
    return this.prisma.note.create({
      data,
    })
  }

  async update(parameters: {
    where: Prisma.NoteWhereUniqueInput
    data: Prisma.NoteUpdateInput
  }): Promise<Note> {
    const { where, data } = parameters
    return this.prisma.note.update({
      data,
      where,
    })
  }

  async delete(where: Prisma.NoteWhereUniqueInput): Promise<Note> {
    return this.prisma.note.delete({
      where,
    })
  }
}
