import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from 'server/configs/firebase.service';
import { ConnectionRedisService } from './connection-redis.service';

@Module({
  imports: [ConfigModule],
  providers: [ConnectionRedisService, FirebaseService],
  exports: [ConnectionRedisService, FirebaseService],
})
export class SharedModule {}
