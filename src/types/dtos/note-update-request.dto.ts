import { IsString, Matches, IsIn } from 'class-validator'
import { categories } from './common/categories/categories'

class NoteUpdateRequestDto {
  @IsString()
  name: string

  @Matches(/^([1-9]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/, {
    message: 'Invalid date format. Please use DD-MM-YYYY format.',
  })
  date: string

  @IsString()
  content: string

  @IsString()
  @IsIn(categories)
  category: string
}

export { NoteUpdateRequestDto }
