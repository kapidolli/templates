import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { of } from 'rxjs';
import { ConnectionRedisService } from 'server/shared/connection-redis.service';
import { User, userSchema } from './user.model';

@Injectable()
export class AuthService {
  constructor(private connection: ConnectionRedisService) {}

  async createUser(user: User) {
    const users = await this.findUserByEmail(user.email);

    if (users.length > 0) {
      throw new InternalServerErrorException();
    }

    await this.connection.client.execute([
      'JSON.SET',
      'User:' + user.uid,
      '.',
      JSON.stringify(user),
    ]);
    return this.getUser(user.uid);
  }

  getUser(id: string) {
    const repository = this.connection.getRepository(userSchema);
    return repository.fetch(id);
  }

  findUserByEmail(email: string) {
    const repository = this.connection.getRepository(userSchema);
    return repository.search().where('email').eq(email).return.all();
  }

  createIndex() {
    const repository = this.connection.getRepository(userSchema);
    repository.createIndex();
  }
}
