import { readFile, writeFile } from "fs/promises";

export class UsersRepository {

    async findOne(id: string) {
        const contentFile = await readFile('users.json', 'utf8')
        const users = JSON.parse(contentFile)
        return users[id]
    }

    async findAll() {
        const contentFile = await readFile('users.json', 'utf8')
        const users = JSON.parse(contentFile)
        return users
    }

    async create(content: string){
        const contentFile = await readFile('users.json', 'utf8')
        const users = JSON.parse(contentFile)

        const id = Math.floor(Math.random()* 999)
        users[id] = {
            id, content
        }
        await writeFile('users.json', JSON.stringify(users))
    }
}