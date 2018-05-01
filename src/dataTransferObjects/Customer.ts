import { IsDate, Min, IsInt, IsIn, IsString } from 'class-validator'

export class Name {
  first: string
  last: string
}

export class CustomerDTO {
  @IsInt() customerID: number

  @IsString() name: string

  @IsDate() birthday: Date

  @IsIn(['m', 'f'])
  gender: 'm' | 'f'

  @IsDate() lastContact: Date

  @Min(0)
  customerLifetimeValue: number
}
