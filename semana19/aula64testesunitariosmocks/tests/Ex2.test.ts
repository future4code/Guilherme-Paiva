import { Fighter, validateCharacter } from "../src/Ex1"

test ("Testando personagem com nome vazio", () => {
  const fighter: Fighter = {
    name: "", life: 1500, strength: 100, defense: 50
  }

  const result = validateCharacter(fighter)

  expect(result).toBe(false)
})

test ("Testando personagem com vida undefined", () => {
  const fighter: Fighter = {
    name: "Ryu", life: undefined, strength: 100, defense: 50
  }

  const result = validateCharacter(fighter)

  expect(result).toBe(false)
})

test ("Testando personagem com força undefined", () => {
  const fighter: Fighter = {
    name: "Ryu", life: 1500, strength: undefined, defense: 50
  }

  const result = validateCharacter(fighter)

  expect(result).toBe(false)
})

test ("Testando personagem com defesa undefined", () => {
  const fighter: Fighter = {
    name: "Ryu", life: 1500, strength: 100, defense: undefined
  }

  const result = validateCharacter(fighter)

  expect(result).toBe(false)
})

test ("Testando personagem com valor negativo de vida", () => {
  const fighter: Fighter = {
    name: "Ryu", life: -1500, strength: 100, defense: 50
  }

  const result = validateCharacter(fighter)

  expect(result).toBe(false)
})

test ("Testando personagem com valor 0 de vida", () => {
  const fighter: Fighter = {
    name: "Ryu", life: 0, strength: 100, defense: 50
  }

  const result = validateCharacter(fighter)

  expect(result).toBe(false)
})

test ("Testando personagem válido", () => {
  const fighter: Fighter = {
    name: "Ryu", life: 1500, strength: 100, defense: 50
  }

  const result = validateCharacter(fighter)

  expect(result).toBe(true)
})