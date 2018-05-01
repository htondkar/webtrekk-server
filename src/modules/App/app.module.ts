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

@Module({
  imports: [TypeOrmModule.forRoot(), CatModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {}
}
