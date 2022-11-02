import { Controller, Get } from '@nestjs/common';

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
}
