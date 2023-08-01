import { z } from 'zod'

const NoteUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
  category: z.enum(['Task', 'Random Thought', 'Idea']).optional(),
  date: z.string().min(1).optional(),
})

export { NoteUpdateSchema }
