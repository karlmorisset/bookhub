import { Injectable } from '@nestjs/common';
import { BookSchema, CreateBookSchema } from 'prisma/BookSchema';
import { z } from 'zod';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

type CreateBook = z.infer<typeof CreateBookSchema>;
type Book = z.infer<typeof BookSchema>;

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  // async getBooks(): Promise<Book[]> {
  //   const books: Book[] = await this.prisma.book.findMany();

  //   return books;
  // }

  // getBook(id: string): string {
  //   return `Hello book #${id}`;
  // }

  async createBook(payload: Prisma.BookCreateInput): Promise<CreateBook> {
    const book: CreateBook = await this.prisma.book.create({ data: payload });

    console.log(book);

    return book as CreateBook;
  }
}
