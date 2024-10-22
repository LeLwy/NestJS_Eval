import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book)
        private BooksRepository: Repository<Book>,
      ) {}

    async findOne(id: number){
        return await this.BooksRepository.findOneBy(id)
    }

    async findAll(){
        return await this.BooksRepository.find()
    }

    async create(book: Book){
        return await this.BooksRepository.save(book)
    }
}