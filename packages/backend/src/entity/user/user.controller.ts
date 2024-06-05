import { Body, Controller } from '@nestjs/common';
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

  @TsRestHandler(contract.createUser)
  createUser(@Body() body: CreateUser) {
    return tsRestHandler(contract.createUser, async () => {
      const user: User = await this.service.createUser(body);

      return { status: 201, body: user };
    });
  }
}
