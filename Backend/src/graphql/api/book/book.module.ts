import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { BookResolver } from './book.resolver'
import { BookService } from './book.service'
import { Book, BookSchema } from './models'

@Module({
  providers: [BookService, BookResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },
    ]),
  ],
})
export class BookModule {}
