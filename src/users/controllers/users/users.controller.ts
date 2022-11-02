import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return [{
            userName:'Shahab',
            email: "shahabm298@gmail.com"
        }]
    }

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

    @Post()
    createUser(@Req() request:Request, @Res() response:Response){
        console.log(request.body)
        response.send('Created')
    }
}
