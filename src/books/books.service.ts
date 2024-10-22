import { BooksRepository } from './books.repository';

export class BooksService {

    BooksRepository : BooksRepository

    constructor(){
        this.BooksRepository = new BooksRepository()
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