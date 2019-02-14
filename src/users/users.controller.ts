import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get('/users')
  getUsers(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':name')
    getProductByName(@Param() params: any): Promise<Users> {
      return this.usersService.findByName(params.name);
    }

}
