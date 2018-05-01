import { Component, ForbiddenException, UseGuards } from '@nestjs/common'
import { ICat, CatDto } from '../../dataTransferObjects/Cat'
import { InjectRepository } from '@nestjs/typeorm'
import { Cat } from 'Entities/Cat.entity'
import { Repository } from 'typeorm'

@Component()
export class CatService {
  constructor(@InjectRepository(Cat) private readonly Cats: Repository<Cat>) {}

  async getAll() {
    return await this.Cats.find()
  }

  async getById(id: number) {
    return await this.Cats.find({ id })
  }

  async getByName(name: string) {
    return await this.Cats.find({ name })
  }

  async create(cat: CatDto) {
    return await this.Cats.save(cat)
  }

  async editCat(id: number, cat: CatDto) {
    await this.Cats.update(id, cat)
    return await this.Cats.find({ id })
  }
}
