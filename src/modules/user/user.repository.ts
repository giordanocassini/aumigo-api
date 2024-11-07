import { Collection, Db } from 'mongodb';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  protected readonly collection: Collection<User>;

  constructor(db: Db) {
    this.collection = db.collection('users');
  }

  async createUser({ name, email, cpf, password, userType }: User) {
    try {
      const result = await this.collection.insertOne({
        name,
        email,
        cpf,
        password,
        userType,
      });
      return result.insertedId;
    } catch (error) {
      throw new Error('Error creating user: ' + error);
    }
  }
}
