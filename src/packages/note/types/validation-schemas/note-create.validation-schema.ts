import { z } from 'zod'

const NoteCreateSchema = z.object({
  name: z.string().trim().min(1).nonempty(),
  content: z.string().trim().min(1).nonempty(),
  category: z.enum(['Task', 'Random Thought', 'Idea']),
  date: z
    .string()
    .min(1)
    .trim()
    .nonempty()
    .regex(
      /^([1-9]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/,
      'Invalid date format. Date should be in the format YYYY-MM-DD.'
    ),
})

export { NoteCreateSchema }
