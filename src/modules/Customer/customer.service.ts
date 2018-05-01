import { Component, ForbiddenException, UseGuards } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Customer } from 'Entities/Customer.entity'
import { CustomerDTO } from '../../dataTransferObjects/Customer'

@Component()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly Customers: Repository<Customer>,
  ) {}

  async getAll() {
    return await this.Customers.find()
  }

  async getById(id: number) {
    return await this.Customers.find({ customerID: id })
  }

  async getByName(name: string) {
    return await this.Customers.find({ name })
  }

  async create(cat: CustomerDTO) {
    return await this.Customers.save(cat)
  }

  async editCat(id: number, customer: CustomerDTO) {
    await this.Customers.update(id, customer)
    return await this.Customers.find({ customerID: id })
  }

  async remove(id) {
    await this.Customers.remove(id)
    return {
      message: 'successfully removed the customer',
    }
  }
}
