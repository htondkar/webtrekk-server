import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common'
import RequestLogger from 'middlewares/logger'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CustomerModule } from '../Customer/customer.module'
import { CorsMiddleware } from '../../middlewares/CORS'

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule, CorsMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer
      .apply([CorsMiddleware])
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
