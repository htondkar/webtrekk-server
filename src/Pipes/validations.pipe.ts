import {
  PipeTransform,
  Pipe,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'

/**
 * Validate inputs.
 * checks to see if it should validate the input.
 * NOTE: uses class-validator which means plain objects
 * should first be converted to class instances
 */
@Pipe()
export class ValidationPipe implements PipeTransform<any> {
  constructor(private readonly validationOptions?: object) {}

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object]
    return !types.find(type => metatype === type)
  }

  async transform(value, metadata: ArgumentMetadata) {
    const { metatype } = metadata
    if (!metatype || !this.toValidate(metatype)) {
      return value
    }

    const object = plainToClass(metatype, value)
    const errors = await validate(
      object,
      this.validationOptions || {
        skipMissingProperties: true,
      },
    )

    if (errors.length > 0) {
      throw new BadRequestException({ message: 'Validation failed', errors })
    }

    return value
  }
}
