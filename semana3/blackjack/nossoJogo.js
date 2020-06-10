/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Bem vindo ao jogo de Blackjack!")
 if (confirm("Quer iniciar uma nova rodada?")){
    const cartaJog1 = comprarCarta()
    const cartaJog2 = comprarCarta()
    const pontJog = cartaJog1.valor + cartaJog2.valor
    console.log("Usuário - cartas: " + cartaJog1.texto + " " + cartaJog2.texto + " - pontuação " + pontJog)
    const cartaComp1 = comprarCarta()
    const cartaComp2 = comprarCarta()
    const pontComp = cartaComp1.valor + cartaComp2.valor
    console.log("Computador - cartas: " + cartaComp1.texto + " " + cartaComp2.texto + " - pontuação " + pontComp)
    if(pontJog > pontComp){
      console.log("O usuário ganhou!")
      }if(pontJog < pontComp){
      console.log("O computador ganhou!")
         }if (pontComp === pontJog){
         console.log("Empate!")
      }
        }else{
   console.log("O jogo acabou.")
 }