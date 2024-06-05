import { z } from 'zod';
import { UserSchema } from './UserSchema';

export const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  owner: UserSchema.nullish().default(null),
  ownerId: z.union([z.number(), z.null()]).default(null),
});

export const CreateBookSchema = BookSchema.omit({
  id: true,
  owner: true,
  ownerId: true,
});
