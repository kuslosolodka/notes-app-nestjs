import { z } from 'zod'

const NoteRouteParametersSchema = z.preprocess(
  (value) => Number.parseInt(z.string().parse(value), 10),
  z.number().positive().max(100)
)

export { NoteRouteParametersSchema }
