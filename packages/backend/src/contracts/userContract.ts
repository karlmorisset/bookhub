// contract.ts

import { initContract } from '@ts-rest/core';
import { BookSchema } from 'prisma/BookSchema';
import { CreateUserSchema, UserSchema } from 'prisma/UserSchema';

const c = initContract();

export const contract = c.router({
  createUser: {
    method: 'POST',
    path: '/users',
    responses: {
      201: UserSchema,
    },
    body: CreateUserSchema,
    summary: 'Create a user',
  },
  getUser: {
    method: 'GET',
    path: `/users/:id`,
    responses: {
      200: UserSchema.nullable(),
    },
    summary: 'Get a user by id',
  },
  getUsers: {
    method: 'GET',
    path: `/users/`,
    responses: {
      200: UserSchema.nullable(),
    },
    summary: 'Get a user by id',
  },
  getBooksByUser: {
    method: 'GET',
    path: `/users/books`,
    responses: {
      200: BookSchema.nullable(),
    },
    summary: 'Get a user by id',
  },
});
