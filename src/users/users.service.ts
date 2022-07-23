import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users as UserEntity } from '../typeorm/users';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) { }

    findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    create(createUserDto: CreateUserDto) {
        const newUser = this.usersRepository.create(createUserDto);

        return this.usersRepository.save(newUser);
    }
}
