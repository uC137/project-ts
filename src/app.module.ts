import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '/www/project-ts/database/database.sqlite',
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
