import { AnySchema } from 'joi'
import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common'

export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: AnySchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const result = this.schema.validate(value)
      if (!result.error) return result.value

      throw new BadRequestException(result.error)
    } catch (err) {
      throw new BadRequestException(err)
    }
  }
}
