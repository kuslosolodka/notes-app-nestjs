import { z } from 'zod'

const NoteCreateSchema = z.object({
  name: z.string().min(1),
  content: z.string().min(1),
  category: z.enum(['Task', 'Random Thought', 'Idea']),
  date: z.string().min(1),
})

export { NoteCreateSchema }
