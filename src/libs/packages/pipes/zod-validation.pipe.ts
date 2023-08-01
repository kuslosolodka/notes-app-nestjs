import type { PipeTransform } from '@nestjs/common'
import { BadRequestException, Injectable } from '@nestjs/common'
import { Schema, ZodError } from 'zod'

@Injectable()
class ZodValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}

  transform(value: unknown) {
    try {
      this.schema.parse(value)
      return value
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((error_) => {
          return {
            field: error_.path.join('.'),
            message: error_.message,
          }
        })
        throw new BadRequestException(errorMessages)
      } else {
        throw error
      }
    }
  }
}

export { ZodValidationPipe }
