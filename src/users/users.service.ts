import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {
  }

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async findByName(name: string): Promise<Users> {
    const result = await this.usersRepository.find({ name });
    return result[0];
  }

}
