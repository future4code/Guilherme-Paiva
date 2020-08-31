// a)

function obterEstatisticas(numeros: number[]) {

  const numerosOrdenados = numeros.sort(
      (a, b) => a - b
  )

  let soma = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas: {maior: number, menor: number, media: number} = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}

// b)

// numerosOrdenados é um array porque recebe os dois números necessários na entrada e os ordena; soma é um número que começa com 0 e será atribuído em seguida dentro da variável estatisticas

// c)

type amostraDados = {
  numeros: number[],
  estatisticas: {maior: number, menor: number, media: number}
}