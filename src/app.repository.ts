import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { Note, Prisma } from '@prisma/client'

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

  async findAll(params: {
    skip?: number
    take?: number
    cursor?: Prisma.NoteWhereUniqueInput
    where?: Prisma.NoteWhereInput
    orderBy?: Prisma.NoteOrderByWithRelationInput
  }): Promise<Note[]> {
    const { skip, take, cursor, where, orderBy } = params
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

  async update(params: {
    where: Prisma.NoteWhereUniqueInput
    data: Prisma.NoteUpdateInput
  }): Promise<Note> {
    const { where, data } = params
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
