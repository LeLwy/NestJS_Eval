import { readFile, writeFile } from "fs/promises";

export class BooksRepository {

    async findOne(id: string) {
        const contentFile = await readFile('books.json', 'utf8')
        const books = JSON.parse(contentFile)
        return books[id]
    }

    async findAll() {
        const contentFile = await readFile('books.json', 'utf8')
        const books = JSON.parse(contentFile)
        return books
    }

    async create(content: string){
        const contentFile = await readFile('books.json', 'utf8')
        const books = JSON.parse(contentFile)

        const id = Math.floor(Math.random()* 999)
        books[id] = {
            id, content
        }
        await writeFile('books.json', JSON.stringify(books))
    }
}