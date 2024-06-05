import { Body, Controller } from '@nestjs/common';
import { BookService } from './book.service';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { contract } from '../../contracts/bookContract';
import { CreateBookSchema } from 'prisma/BookSchema';
import { z } from 'zod';

type CreateBook = z.infer<typeof CreateBookSchema>;
// type Book = z.infer<typeof BookSchema>;

@Controller()
export class BookController {
  constructor(private readonly service: BookService) {}

  //   @TsRestHandler(contract.getBooks)
  //   getBooks() {
  //     return tsRestHandler(contract.getBooks, async () => {
  //       const books = await this.service.getBooks();

  //       return { status: 200, body: books };
  //     });
  //   }

  @TsRestHandler(contract.createBook)
  createBook(@Body() body: CreateBook) {
    return tsRestHandler(contract.createBook, async () => {
      const book: CreateBook = await this.service.createBook(body);

      return { status: 201, body: book };
    });
  }

  //   @TsRestHandler(contract.getBooks)
  //   async getBook() {
  //     return tsRestHandler(contract.getBooks, async ({ params }) => {
  //       const book = await this.service.getBook(params.id);

  //       return { status: 200, body: book };
  //     });
  //   }
}
