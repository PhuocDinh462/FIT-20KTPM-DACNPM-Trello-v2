import { Model } from 'mongoose'

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Book, BookDocument } from './models'

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book)
    return newBook.save()
  }

  async update(id: string, book: Book): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec()
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec()
  }
}
