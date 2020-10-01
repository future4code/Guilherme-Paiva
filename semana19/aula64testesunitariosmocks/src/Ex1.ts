export interface Fighter {
  name: string,
  life: number,
  strength: number,
  defense: number
}

export function validateCharacter(input: Fighter): boolean {
  if (!input.name || !input.life || !input.strength || !input.defense){
    return false
  }
  if (input.life <= 0 || input.strength <= 0 || input.defense <= 0){
    return false
  }
  return true
}
