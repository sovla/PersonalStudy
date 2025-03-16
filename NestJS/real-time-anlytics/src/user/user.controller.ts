import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body('name') name: string) {
    return this.userService.createUser(name);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
