import {
  IsDate,
  Min,
  IsInt,
  IsIn,
  IsString,
  IsDateString,
} from 'class-validator'

export class Name {
  first: string
  last: string
}

export class CustomerDTO {
  @IsString() firstName: string
  @IsString() lastName: string
  @IsDateString() birthday: string
  @IsIn(['m', 'f'])
  gender: 'm' | 'f'
  @IsDateString() lastContact: string
  @Min(0)
  customerLifetimeValue: number
}
