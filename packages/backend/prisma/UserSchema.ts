import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
});

export const CreateUserSchema = UserSchema.omit({ id: true });
