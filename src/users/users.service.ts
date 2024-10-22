import { UsersRepository } from './users.repository';

export class UsersService {

    UsersRepository : UsersRepository

    constructor(){
        this.UsersRepository = new UsersRepository()
    }

    async findOne(id: string){
        return await this.UsersRepository.findOne(id)
    }

    async findAll(){
        return await this.UsersRepository.findAll()
    }

    async create(content: string){
        return await this.UsersRepository.create(content)
    }
}