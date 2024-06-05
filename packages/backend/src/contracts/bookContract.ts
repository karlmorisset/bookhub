import { initContract } from '@ts-rest/core';
import { BookSchema, CreateBookSchema } from 'prisma/BookSchema';

const c = initContract();

export const contract = c.router({
  getBooks: {
    method: 'GET',
    path: `/books`,
    responses: {
      200: BookSchema.nullable(),
    },
    summary: 'Get all books',
  },

  // getBook: {
  //   method: 'GET',
  //   path: `/books/:id`,
  //   responses: {
  //     200: BookSchema,
  //   },
  //   summary: 'Get a book by id',
  // },

  createBook: {
    method: 'POST',
    path: '/books',
    responses: {
      201: CreateBookSchema,
    },
    body: CreateBookSchema,
    summary: 'Create a book',
  },

  // releaseBook: {
  //   method: 'PUT',
  //   path: `/books/:id/release`,
  //   responses: {
  //     200: BookSchema.nullable(),
  //   },
  //   body: z.object({
  //     userId: z.string(),
  //   }),
  //   summary: 'Release a book',
  // },

  // borrowBook: {
  //   method: 'PUT',
  //   path: `/books/:id/borrow`,
  //   responses: {
  //     200: BookSchema.nullable(),
  //   },
  //   body: z.object({
  //     userId: z.string(),
  //   }),
  //   summary: 'Borrow a book',
  // },
});
