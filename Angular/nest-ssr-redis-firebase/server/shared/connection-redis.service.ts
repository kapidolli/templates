import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Repository } from 'redis-om';
import { from, map, Observable } from 'rxjs';

@Injectable()
export class ConnectionRedisService implements OnModuleInit {
  private _client = new Client();
  private REDIS_URL: string;

  constructor(private configService: ConfigService) {
    this.REDIS_URL = this.configService.get<string>('REDIS_URL')!;
  }

  onModuleInit() {
    this.connect().subscribe();
  }

  private connect(): Observable<Client> {
    if (!this._client.isOpen()) {
      return from(this._client.open(this.REDIS_URL)).pipe(
        map(() => {
          return this._client;
        })
      );
    }
    return new Observable((observer) => {
      observer.next(this._client);
    });
  }

  getRepository(schema: any) {
    return new Repository(schema, this._client);
  }

  get client(): Client {
    return this._client;
  }
}
