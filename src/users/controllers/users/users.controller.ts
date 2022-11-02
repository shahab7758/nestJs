import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUser } from '../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

//get req method with root path
    @Get()
    getUsers(){
        return [{
            userName:'Shahab',
            email: "shahabm298@gmail.com"
        }]
    }
//get request method with /posts path
    @Get('posts')
    getUsersPosts(){
        return [{
            userName:'Shahab',
            email: "shahabm298@gmail.com",
            posts:[
                {
                    id:1,
                    title:'post 1'
                },
                {
                    id:2,
                    title:'post 2'
                }
            ]
        }]
    }


//post req method with root path and req & rea decoraters 
    @Post()
    createUser(@Req() request:Request, @Res() response:Response){
        console.log(request.body)
        response.send('Created')
    }

    // Request with body and Data Transfer Object DTOs

    @Post('create')
    create(@Body() userPayload: CreateUser){
        console.log(userPayload)
        return {}
    }
}
