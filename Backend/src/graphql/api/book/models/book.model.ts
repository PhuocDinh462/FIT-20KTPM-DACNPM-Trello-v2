import { Document } from 'mongoose'

import { Field, ObjectType } from '@nestjs/graphql'
import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type BookDocument = Book & Document

@ObjectType()
@Schema()
export class Book {
  @Field()
  title: string

  @Field()
  author: string

  @Field()
  publishedDate: boolean
}

export const BookSchema = SchemaFactory.createForClass(Book)
