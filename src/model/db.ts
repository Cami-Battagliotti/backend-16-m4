import { writeFileSync, readFileSync } from "node:fs"
import { randomUUID } from "node:crypto"

interface BookData {
    name: string
    released: string
    author: string
}
class Db {
    private static PATH: string = "./src/database/books.json"

    private static testConnection() {

    }

    static readFile(): BookData[] {
        const dataTs = readFileSync(Db.PATH, { encoding: "utf-8" })
        return JSON.parse(dataTs)

    }

    static writeFile(data: BookData[]) {
        const dataTs = JSON.stringify(data)

        writeFileSync(Db.PATH, dataTs)

    }
}


// Desestructuro la clase Db (es un objeto), creando una variable que se llama readFile y como valor tiene ese metodo de la clase. Asi puedo ejecutar ese metodo readfile directamente sin tener que llamar a la clase.
const { readFile, writeFile } = Db


// Exporto los metodos estaticos de la clase Db
export { readFile, writeFile }