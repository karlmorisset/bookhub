import { Body, Controller, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { contract } from '../../contracts/userContract';
import { CreateUserSchema, UserSchema } from 'prisma/UserSchema';
import { z } from 'zod';

type CreateUser = z.infer<typeof CreateUserSchema>;
type User = z.infer<typeof UserSchema>;

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @TsRestHandler(contract.getUsers)
  getUsers() {
    return tsRestHandler(contract.getUsers, async () => {
        const users: User[] = await this.service.getUsers();
        return { status: 201, body: users };
    });
  }

  @TsRestHandler(contract.getUser)
  getUser(@Param('id', ParseIntPipe) id: number ) {
    return tsRestHandler(contract.getUser, async () => {
        const user: User = await this.service.getUser(id);

        if (!user) {
            return { status: 404, body: { message: 'User not found' } };
        }

        return { status: 201, body: user };
    });
  }

  @TsRestHandler(contract.createUser)
  createUser(@Body() body: CreateUser) {
    return tsRestHandler(contract.createUser, async () => {
        const user: User = await this.service.createUser(body);
        return { status: 201, body: user };
    });
  }
}
