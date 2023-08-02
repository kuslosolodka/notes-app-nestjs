import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

interface Note {
  name: string

  date: Date

  content: string

  category: string
}

function createRandomNote(): Note {
  return {
    name: faker.word.verb(),
    content: faker.word.words(),
    date: faker.date.anytime(),
    category: faker.helpers.arrayElement(['Random Thought', 'Task', 'Idea']),
  }
}

const notes: Note[] = Array.from({ length: 7 }, createRandomNote)

const prisma = new PrismaClient()

async function runSeeders() {
  await Promise.all(
    notes.map(async (note) => prisma.note.create({ data: note }))
  )
}

runSeeders()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async () => {
    await prisma.$disconnect()
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1)
  })
