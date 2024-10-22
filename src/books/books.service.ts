import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';

@Injectable()
export class BooksService {

    constructor(public BooksRepository : BooksRepository){
    }

    async findOne(id: string){
        return await this.BooksRepository.findOne(id)
    }

    async findAll(){
        return await this.BooksRepository.findAll()
    }

    async create(content: string){
        return await this.BooksRepository.create(content)
    }
}