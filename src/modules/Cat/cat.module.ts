import { TypeOrmModule } from '@nestjs/typeorm'
import { CatService } from './CatService.service'
import { CatController } from './cat.controller'
import { Module, MiddlewaresConsumer, NestModule } from '@nestjs/common'
import RequestLogger from 'middlewares/logger'
import { Cat } from 'Entities/Cat.entity';

const catModuleConfig = {
  imports: [TypeOrmModule.forFeature([Cat])],
  components: [CatService],
  controllers: [CatController],
}

@Module(catModuleConfig)
export class CatModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(RequestLogger).forRoutes(CatController)
  }
}
