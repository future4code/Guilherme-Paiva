import { Casino, LOCATION, NATIONALITY, User, verifyAge } from "../src/Ex3";

test("Testando usuário brasileiro que possa entrar em um estabelecimento no Brasil", () => {
  const brazilian: User = {
    name: "Astrodev",
    age: 19,
    nationality: NATIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.brazilians.allowed).toEqual(["Astrodev"]);
})

test("Testando usuário americano que possa entrar em um estabelecimento no Brasil", () => {
  const american: User = {
    name: "Astrodev Uncle Sam",
    age: 19,
    nationality: NATIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [american]);
  expect(result.americans.allowed).toEqual(["Astrodev Uncle Sam"]);
})

test("Testando dois usuários brasileiros e dois americanos com 19 anos tentando entrar em um estabelecimento nos EUA", () => {
  const american1: User = {
    name: "Astrodev Uncle Sam",
    age: 19,
    nationality: NATIONALITY.AMERICAN,
  };

  const american2: User = {
    name: "Astrodev Barack Obama",
    age: 19,
    nationality: NATIONALITY.AMERICAN,
  };

  const brazilian1: User = {
    name: "Astrodev Carnaval",
    age: 19,
    nationality: NATIONALITY.BRAZILIAN,
  };

  const brazilian2: User = {
    name: "Astrodev Brigadeiro",
    age: 19,
    nationality: NATIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Stellar Club",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [american1, american2, brazilian1, brazilian2]);
  expect(result.americans.unallowed).toEqual(["Astrodev Uncle Sam", "Astrodev Barack Obama"]);
  expect(result.brazilians.unallowed).toEqual(["Astrodev Carnaval", "Astrodev Brigadeiro"]);
})

test("Testando dois usuários brasileiros com 19 anos e dois americanos com 21 anos tentando entrar em um estabelecimento nos EUA", () => {
  const american1: User = {
    name: "Astrodev Uncle Sam",
    age: 21,
    nationality: NATIONALITY.AMERICAN,
  };

  const american2: User = {
    name: "Astrodev Barack Obama",
    age: 21,
    nationality: NATIONALITY.AMERICAN,
  };

  const brazilian1: User = {
    name: "Astrodev Carnaval",
    age: 19,
    nationality: NATIONALITY.BRAZILIAN,
  };

  const brazilian2: User = {
    name: "Astrodev Brigadeiro",
    age: 19,
    nationality: NATIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Stellar Club",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [american1, american2, brazilian1, brazilian2]);
  expect(result.americans.allowed).toEqual(["Astrodev Uncle Sam", "Astrodev Barack Obama"]);
  expect(result.brazilians.unallowed).toEqual(["Astrodev Carnaval", "Astrodev Brigadeiro"]);
})

test("Testando um usuário brasileiro que pode entrar em um estabelecimento no Brasil, com array brazilians allowed maior que 0 e menor que 2", () => {
  const brazilian: User = {
    name: "Astrodev Pão de Queijo",
    age: 19,
    nationality: NATIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  expect(result.brazilians.allowed.length).toBeLessThan(2);
})

test("Testando um usuário americano que pode entrar em um estabelecimento no Brasil, com array americans unallowed igual a 0", () => {
  const american: User = {
    name: "Astrodev George Bush",
    age: 19,
    nationality: NATIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [american]);
  expect(result.americans.unallowed.length).toBe(0);
})

test("Testando dois usuários brasileiros e dois americanos com 19 anos tentando entrar em um estabelecimento nos EUA, com arrays unallowed contendo o nome dos usuários", () => {
  const american1: User = {
    name: "Astrodev Big Mac",
    age: 19,
    nationality: NATIONALITY.AMERICAN,
  };

  const american2: User = {
    name: "Astrodev Donald Trump",
    age: 19,
    nationality: NATIONALITY.AMERICAN,
  };

  const brazilian1: User = {
    name: "Astrodev Petrobras",
    age: 19,
    nationality: NATIONALITY.BRAZILIAN,
  };

  const brazilian2: User = {
    name: "Astrodev Pelé",
    age: 19,
    nationality: NATIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Stellar Club",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [american1, american2, brazilian1, brazilian2]);
  expect(result.americans.unallowed).toContain("Astrodev Donald Trump");
  expect(result.brazilians.unallowed).toContain("Astrodev Pelé");
})

test("Testando dois usuários brasileiros com 19 anos e dois americanos com 21 anos tentando entrar em um estabelecimento nos EUA, com arrays brazilians unallowed tamanho maior que 1, array americans unallowed menor que 1 e array americans allowed tamanho igual a 2", () => {
  const american1: User = {
    name: "Astrodev Estátua da Liberdade",
    age: 21,
    nationality: NATIONALITY.AMERICAN,
  };

  const american2: User = {
    name: "Astrodev Águia Careca",
    age: 21,
    nationality: NATIONALITY.AMERICAN,
  };

  const brazilian1: User = {
    name: "Astrodev Memes",
    age: 19,
    nationality: NATIONALITY.BRAZILIAN,
  };

  const brazilian2: User = {
    name: "Astrodev Bossa Nova",
    age: 19,
    nationality: NATIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Stellar Club",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [american1, american2, brazilian1, brazilian2]);
  expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
  expect(result.americans.unallowed.length).toBeLessThan(1);
  expect(result.americans.allowed.length).toBe(2);
})