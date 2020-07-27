import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para '[1, 1]'", () => {
        const temDuplicado = checaItensDuplicados([1, 1]);
        expect(temDuplicado).toEqual(true);
    });

    it("retorna true para '[0, 0, 2]'", () => {
        const temDuplicado = checaItensDuplicados([0, 0, 2]);
        expect(temDuplicado).toEqual(true);
    });

    it("retorna false para '[0]'", () => {
        const temDuplicado = checaItensDuplicados([0);
        expect(temDuplicado).toEqual(false);
    });

    it("retorna false para '[4, 3, 2, 1]'", () => {
        const temDuplicado = checaItensDuplicados([4, 3, 2, 1]);
        expect(temDuplicado).toEqual(false);
    });
});
