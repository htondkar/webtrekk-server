import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { IsDate, Min, IsInt, IsIn } from 'class-validator'

export class Name {
  @Column() first: string
  @Column() last: string
}

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  @IsInt()
  customerID: number

  @Column(type => Name)
  name: string

  @Column()
  @IsDate()
  birthday: Date

  @Column()
  @IsIn(['m', 'f'])
  gender: 'm' | 'f'

  @Column()
  @IsDate()
  lastContact: Date

  @Column()
  @Min(0)
  customerLifetimeValue: number
}
