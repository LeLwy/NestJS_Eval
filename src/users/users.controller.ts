import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {

    constructor(public UsersService : UsersService) {
    }

    @Get('/:id')
    getUser(@Param('id') id: string){
        return this.UsersService.findOne(id);
    }

    @Get()
    listUsers(){
        return this.UsersService.findAll();
    }

    @Post()
    createUser(@Body() body: CreateUserDto){
        return this.UsersService.create(body.content)
    }
}
