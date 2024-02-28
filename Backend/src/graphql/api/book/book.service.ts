import { Model } from 'mongoose'

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Book, BookDocument, BookInput } from './models'

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(book: BookInput): Promise<Book> {
    const newBook = new this.bookModel({ ...book })
    console.log(newBook)

    return await newBook.save()
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec()
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec()
  }

  async update(id: string, book: Book): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec()
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec()
  }
}
