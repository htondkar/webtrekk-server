import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common'
import RequestLogger from 'middlewares/logger'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Cat } from 'Entities/Cat.entity'
import { CatModule } from '../Cat/cat.module'
import { CustomerModule } from '../Customer/customer.module'

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {}
}
