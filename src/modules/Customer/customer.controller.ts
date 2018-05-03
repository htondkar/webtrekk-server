import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  Delete,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { ValidationPipe } from '../../Pipes/validations.pipe'
import { EntityManager, Repository } from 'typeorm'

import { Roles } from '../../Decorators/roles.decorator'
import { RoleGuard } from '../../Guards/roles.guard'
import { CustomerService } from './customer.service'
import { CustomerDTO } from '../../dataTransferObjects/Customer'

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll() {
    return this.customerService.getAll()
  }

  @Get('/by-name/:name')
  findOneByName(@Param('name') name: string) {
    return this.customerService.getByName(name)
  }

  @Get(':id')
  findOneById(
    @Param('id', new ParseIntPipe())
    id: number,
  ) {
    return this.customerService.getById(id)
  }

  @Post()
  create(
    @Body(new ValidationPipe())
    body: CustomerDTO,
  ) {
    return this.customerService.create(body)
  }

  @Patch(':id')
  edit(
    @Body(new ValidationPipe({ skipMissingProperties: true }))
    body: CustomerDTO,
    @Param('id', new ParseIntPipe())
    id,
  ) {
    return this.customerService.editCustomer(id, body)
  }

  @Delete(':id')
  delete(
    @Param('id', new ParseIntPipe())
    id: number,
  ) {
    return this.customerService.remove(id)
  }
}
