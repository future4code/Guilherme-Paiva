import { Fighter, validateCharacter } from "./Ex1"

export function performAttack(attacker: Fighter, defender: Fighter){
  if (!validateCharacter(attacker) || !validateCharacter(defender)){
    throw new Error("Invalid character")
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense
  }
}

export const invertedDependenciedPerformAttack = (attacker: Fighter, defender: Fighter, validator: (input: Fighter) => boolean) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
}

/* Na primeira implementação, ao rodar a função performAttack você estará rodando junto a função validateCharacter, o que prejudica
seu teste unitário. Na segunda implementação, validateCharacter está sendo passado como parâmetro (validator). */