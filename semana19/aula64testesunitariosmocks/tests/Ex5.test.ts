import { Fighter } from "../src/Ex1";
import { invertedDependenciedPerformAttack } from "../src/Ex3";

test("Testando ataque", () => {
  expect.assertions(4);

  const mockTrue = jest.fn(() => {
    return true;
  });

  const attacker: Fighter = {
    name: "Ryu",
    life: 1500,
    defense: 500,
    strength: 1000,
  };

  const defender: Fighter = {
    name: "Ken",
    life: 1500,
    defense: 800,
    strength: 700,
  };

  invertedDependenciedPerformAttack(attacker, defender, mockTrue);

  expect(defender.life).toEqual(1300);
  expect(mockTrue).toHaveBeenCalled();
  expect(mockTrue).toHaveBeenCalledTimes(2);
  expect(mockTrue).toHaveReturnedTimes(2);
});

test("Testando personagem com informação inválida", () => {
  expect.assertions(4);

  const mockFalse = jest.fn(() => {
    return false;
  });

  const attacker: Fighter = {
    name: "Ryu",
    life: 1500,
    defense: 500,
    strength: 1000,
  };

  const defender: Fighter = {
    name: "Ken",
    life: 1500,
    defense: 800,
    strength: 700,
  };

  try {
    invertedDependenciedPerformAttack(attacker, defender, mockFalse);
  } catch (err) {
    expect(err.message).toBe("Invalid character");
    expect(mockFalse).toHaveBeenCalled();
    expect(mockFalse).toHaveBeenCalledTimes(1);
    expect(mockFalse).toHaveReturnedTimes(1);
  }
});