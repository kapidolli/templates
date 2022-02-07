import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { GetUser } from './get-user.decorator';
import { User } from './user.model';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get(':id')
  getUserById(@Param('id') id: string, @GetUser() user: any) {
    return this.authService.getUser(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  createUser(@GetUser() user: User) {
    return this.authService.createUser(user);
  }

  @Get('index')
  createIndex() {
    this.authService.createIndex();
    return { message: 'ok' };
  }
}
