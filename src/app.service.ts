import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersRepository } from './app.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersRepository: UsersRepository,
  ) {}

  getHello(): string {
    return this.configService.get('GREETING');
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.usersRepository.create(createUserDto);
  }
}
