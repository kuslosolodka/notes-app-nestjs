import { Transform } from 'class-transformer'
import { IsDateString, IsIn, IsNotEmpty, IsString } from 'class-validator'

import { categories } from './common/categories/categories'

class NoteCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsDateString()
  @Transform(({ value }) => {
    const [day, month, year] = (value as string).split('-').map(Number)
    return new Date(Date.UTC(year, month - 1, day)).toISOString()
  })
  date: string

  @IsNotEmpty()
  @IsString()
  content: string

  @IsNotEmpty()
  @IsString()
  @IsIn(categories)
  category: string
}

export { NoteCreateRequestDto }
