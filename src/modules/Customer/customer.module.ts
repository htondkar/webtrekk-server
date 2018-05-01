import { TypeOrmModule } from '@nestjs/typeorm'
import { Module, MiddlewaresConsumer, NestModule } from '@nestjs/common'
import { Customer } from '../../Entities/Customer.entity'
import { CustomerService } from './customer.service'
import { CustomerController } from './customer.controller'

const catModuleConfig = {
  imports: [TypeOrmModule.forFeature([Customer])],
  components: [CustomerService],
  controllers: [CustomerController],
}

@Module(catModuleConfig)
export class CustomerModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {}
}
