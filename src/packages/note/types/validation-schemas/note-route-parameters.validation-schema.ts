import { z } from 'zod'

const NoteRouteParametersSchema = z.preprocess(
  Number,
  z.number({ invalid_type_error: 'Invalid value, please, provide number' })
)

export { NoteRouteParametersSchema }
