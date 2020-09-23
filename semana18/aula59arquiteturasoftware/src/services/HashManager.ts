import * as bcrypt from "bcryptjs";


export class HashManager {

    public async hash(plaintext: string): Promise<string> {
        const rounds = 12;
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(plaintext, salt);
        return result;
    }

    public async compare(plaintext: string, cypherPassword: string): Promise<boolean>{
        return await bcrypt.compare(plaintext, cypherPassword);
    }

}