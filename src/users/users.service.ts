import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

    constructor(public UsersRepository : UsersRepository){
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