import { IsNotEmpty, IsString, IsIn, IsDateString } from 'class-validator'
import { Transform } from 'class-transformer'
import { categories } from './common/categories/categories'

class NoteCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsDateString()
  @Transform(({ value }) => {
    const [day, month, year] = value.split('-').map(Number)
    const isoDate = new Date(Date.UTC(year, month - 1, day)).toISOString()
    return isoDate
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
