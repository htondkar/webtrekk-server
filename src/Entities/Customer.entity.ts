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
  @IsIn(['m', 'w'])
  gender: 'm' | 'w'

  @Column({ type: 'datetime', default: null, nullable: true })
  @IsDate()
  lastContact: Date

  @Column()
  @Min(0)
  customerLifetimeValue: number
}
