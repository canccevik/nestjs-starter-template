import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate, ValidationError } from 'class-validator'

@Injectable()
export class ValidationPipe<T> implements PipeTransform<T> {
  public async transform(value: T, { metatype }: ArgumentMetadata): Promise<T> {
    if (!metatype || !this.toValidate(metatype)) {
      return value
    }

    const object = plainToInstance(metatype, value)
    const errors = await validate(object, {
      whitelist: true,
      forbidNonWhitelisted: true,
      stopAtFirstError: true
    })

    if (errors.length === 0) {
      return value
    }

    const errorMessages: string[] = []

    errors.forEach((error: ValidationError) => {
      Object.values(error.constraints).forEach((message) => {
        errorMessages.push(message)
      })
    })
    throw new BadRequestException(errorMessages)
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object]
    return !types.includes(metatype)
  }
}
