import { HttpException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: User) {
    try {
      return await this.userRepository.createUser(user);
    } catch (error) {
      throw new HttpException(`Unable to create user: ${error}`, 500);
    }
  }
}
