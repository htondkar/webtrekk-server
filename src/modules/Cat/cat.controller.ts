import {
  Get,
  Controller,
  Post,
  Req,
  Body,
  Param,
  Patch,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common'
import { ValidationPipe } from 'Pipes/validations.pipe'
import { CatDto } from 'dataTransferObjects/Cat'
import { RoleGuard } from '../../Guards/roles.guard'
import { Roles } from '../../Decorators/roles.decorator'
import { InjectRepository } from '@nestjs/typeorm'
import { Cat } from 'Entities/Cat.entity'
import { Repository, EntityManager } from 'typeorm'
import { CatService } from './CatService.service'

@Controller('cats')
@UseGuards(RoleGuard)
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  findAll() {
    return this.catService.getAll()
  }

  @Get('/by-name/:name')
  findOneByName(@Param() params) {
    return this.catService.getByName(params.name)
  }

  @Get(':id')
  findOneById(
    @Param('id', new ParseIntPipe())
    id,
  ) {
    return this.catService.getById(id)
  }

  @Post()
  create(
    @Body(new ValidationPipe())
    body: CatDto,
  ) {
    return this.catService.create(body)
  }

  @Patch(':id')
  edit(
    @Body() body,
    @Param('id', new ParseIntPipe())
    id,
  ) {
    return this.catService.editCat(id, body)
  }
}
