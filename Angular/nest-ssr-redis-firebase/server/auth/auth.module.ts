import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  imports: [SharedModule],
  controllers: [AuthController]
})
export class AuthModule {}
