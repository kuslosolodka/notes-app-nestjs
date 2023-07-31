import { IsNotEmpty, IsString, IsIn, Matches } from 'class-validator'
import { categories } from './common/categories/categories'

class NoteCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @Matches(/^([1-9]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/, {
    message: 'Invalid date format. Please use DD-MM-YYYY format.',
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
