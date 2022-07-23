import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('users')
export class UsersController {
    constructor(private usersServices: UsersService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersServices.findAll();
    }

    @Get(':id')
    getUser(@Param() param): string {
        return `Get user by id ${param.id}`;
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersServices.create(createUserDto);
    }

    @Put(':id')
    update(@Param('id') id): string {
        return `Update user by id ${id}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete user by id ${id}`;
    }
}
