import {
  IsDate,
  Min,
  IsInt,
  IsIn,
  IsString,
  IsDateString,
  Allow,
  IsDefined,
} from 'class-validator'

export class CustomerDTO {
  @IsDefined()
  @IsString()
  firstName: string

  @IsDefined()
  @IsString()
  lastName: string

  @IsDefined()
  @IsDateString()
  birthday: string

  @IsDefined()
  @IsIn(['m', 'w'])
  gender: 'm' | 'w'

  @IsDateString()
  lastContact: string

  @Min(0)
  customerLifetimeValue: number
}
