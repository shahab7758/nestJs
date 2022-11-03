import {IsNotEmpty, IsEmail} from 'class-validator'
export class CreateUserDTO {

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string
}