import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class BookInput {
  @Field()
  title: string

  @Field()
  author: string

  @Field()
  publishedDate: boolean
}
