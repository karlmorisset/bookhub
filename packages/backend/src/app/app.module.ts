import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from 'src/entity/book/book.module';
import { UserModule } from 'src/entity/user/user.module';

@Module({
  imports: [UserModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
