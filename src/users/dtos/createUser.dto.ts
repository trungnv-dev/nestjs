import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsBooleanString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @MaxLength(100)
    firstName: string;
    
    @IsNotEmpty()
    @MaxLength(100)
    lastName: string;
    
    @IsEmail()
    @MaxLength(150)
    email: string;
    
    @MaxLength(255)
    address: string;

    @IsNotEmpty()
    @MaxLength(255)
    password: string;
    
    @IsBooleanString()
    isActive: boolean;
}