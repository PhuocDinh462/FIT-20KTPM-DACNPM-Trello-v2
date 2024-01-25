import z from 'zod'
import * as joi from 'joi'

export const TestApiQuerySchema = z.object({
  name: z.string({ required_error: 'Missing name' }),
})
export type TestApiQuery = z.infer<typeof TestApiQuerySchema>

export const TestApiQueryJoiSchema = joi.object().keys({
  name: joi.string().required().messages({
    'string.required': 'Please input a valid name',
  }),
})
