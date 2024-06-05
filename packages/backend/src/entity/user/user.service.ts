import { Injectable } from '@nestjs/common';
import { UserSchema } from 'prisma/UserSchema';
import { z } from 'zod';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

type User = z.infer<typeof UserSchema>;

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // async getUsers(): Promise<User[]> {
  //   return (await this.prisma.user.findMany()) as User;
  // }

  // getUser(id: string): string {
  //   return `Hello user #${id}`;
  // }

  async createUser(payload: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.create({ data: payload });

    return user as User;
  }
}
