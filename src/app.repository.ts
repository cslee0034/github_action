import { PrismaService } from './orm/prisma/service/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Role } from './app.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const {
      email,
      provider = 'local',
      firstName = null,
      lastName = null,
    } = createUserDto;

    let password = null;

    if ('password' in createUserDto) {
      password = createUserDto.password;
    }

    return await this.prisma.user.create({
      data: {
        email,
        provider,
        password,
        firstName,
        lastName,
        role: Role.USER,
      },
    });
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { email: email },
    });
  }
}
