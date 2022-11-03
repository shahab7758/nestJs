import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import {  CreateUserDTO } from '../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

//get req method with root path
    // @Get()
    // getUsers(){
    //     return [{
    //         userName:'Shahab',
    //         email: "shahabm298@gmail.com"
    //     }]
    // }
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
    @UsePipes(new ValidationPipe())
    create(@Body() userPayload: CreateUserDTO){
        console.log(userPayload)
        return {userPayload}
    }

    // Route Params are usefull for filtering 

//Method with route params with express 

    // @Get(':id')
    // getuserById(@Req() request:Request){
    //     console.log(request.params)
    //     return {
    //         id: request.params.id
    //     }
    // }

//Method with route params with nest param method

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number){
        console.log(id)
        return {
            id
        }
    }

//Method with Multiple route params with nest param method

    // @Get(':id/:postId')
    // getUserById(@Param('id') id:string, @Param('postId') postId:string){
    //     console.log(id,postId)
    //     return {
    //         id,
    //         postId
    //     }
    // }


    // Query Params are best used for actions like filtering, pagination 

// Method with Query Param
    //test path http://localhost:3000/users?sortBy=asc
    @Get()
    getUsers(@Query('sortByAsc', ParseBoolPipe) sortBy:boolean){
        return {
            sortBy
        }
    }
}
