import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { IsDate, Min, IsInt, IsIn } from 'class-validator'

@Entity()
export class Customer {
  @PrimaryGeneratedColumn() customerID: number

  @Column() firstName: string

  @Column() lastName: string

  @Column('datetime')
  @IsDate()
  birthday: Date

  @Column()
  @IsIn(['m', 'f'])
  gender: 'm' | 'f'

  @Column('datetime')
  @IsDate()
  lastContact: Date

  @Column()
  @Min(0)
  customerLifetimeValue: number
}
