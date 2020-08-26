import * as fs from 'fs'

const arquivo: any = process.argv[2]

const tarefa: string = process.argv[3]

fs.appendFileSync(arquivo, tarefa);

