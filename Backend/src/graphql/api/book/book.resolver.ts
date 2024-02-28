import { Args, ID, Mutation, Resolver } from '@nestjs/graphql'

import { BookService } from './book.service'
import { Book, BookInput } from './models'

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  async createBook(@Args('input') input: BookInput): Promise<Book> {
    return this.bookService.create(input)
  }

  @Mutation(() => Book)
  async updateBook(@Args('id', { type: () => ID }) id: string, @Args('input') input: BookInput): Promise<Book> {
    return this.bookService.update(id, input)
  }

  @Mutation(() => Book)
  async deleteBook(@Args('id', { type: () => ID }) id: string): Promise<Book> {
    return this.bookService.delete(id)
  }
}
