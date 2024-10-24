import { BooksService } from './books.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBookDto } from './dto/CreateBook.dto';

@Controller('books')
export class BooksController {

    constructor(public BooksService : BooksService) {
    }

    @Get('/:id')
    getUser(@Param('id') id: string){
        return this.BooksService.findOne(id);
    }

    @Get()
    listUsers(){
        return this.BooksService.findAll();
    }

    @Post()
    createUser(@Body() body: CreateBookDto){
        return this.BooksService.create(body.content)
    }
}
