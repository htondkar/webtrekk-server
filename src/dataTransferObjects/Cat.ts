import { IsString, IsInt } from 'class-validator'

export interface ICat {
  name: string
  type: 'fluffy' | 'grumpy'
}

export class CatDto {
  @IsString() readonly name: string
  @IsString() readonly breed: string
}
