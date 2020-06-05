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
if (confirm("Quer iniciar uma nova rodada?")) {
    const cartaJog1 = comprarCarta()
    const cartaJog2 = comprarCarta()
    while (cartaJog1 === "A" && cartaJog2 === "A") {
        cartaJog1 = comprarCarta()
        cartaJog2 = comprarCarta()
    }
    let pontJog = cartaJog1.valor + cartaJog2.valor


    const cartaComp1 = comprarCarta()
    const cartaComp2 = comprarCarta()
    while (cartaComp1 === "A" && cartaComp2 === "A") {
        cartaComp1 = comprarCarta()
        cartaComp2 = comprarCarta()
    }
    let pontComp = cartaComp1.valor + cartaComp2.valor

    if (confirm("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". A carta revelada do computador é " + cartaComp1.texto + ". Deseja comprar mais uma carta?")) {
        const cartaJog3 = comprarCarta() // SAIR COM DUAS - COMPRAR TERCEIRA CARTA
        pontJog = pontJog + cartaJog3.valor
        if (pontJog > 21) {
            alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                cartaComp1.texto + " " + cartaComp2.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
        }
        if (confirm("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + ". A carta revelada do computador é " + cartaComp1.texto +
                ". Deseja comprar mais uma carta?")) {
            const cartaJog4 = comprarCarta() // SAIR COM TRÊS - COMPRAR QUARTA CARTA
            pontJog = pontJog + cartaJog4.valor
            if (pontJog > 21) {
                alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + " " + cartaJog4.texto + ". Sua pontuação é " + pontJog +
                    ". As cartas do computador são " + cartaComp1.texto + " " + cartaComp2.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
            }
            if (confirm("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + " " + cartaJog4.texto + ". A carta revelada do computador é " + cartaComp1.texto +
                    ". Deseja comprar mais uma carta?")) {
                const cartaJog5 = comprarCarta() // SAIR COM QUATRO - COMPRAR QUINTA CARTA
                pontJog = pontJog + cartaJog5.valor
                if (pontJog > 21) {
                    alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + " " + cartaJog4.texto + " " + cartaJog5.texto + ". Sua pontuação é " + pontJog +
                        ". As cartas do computador são " + cartaComp1.texto + " " + cartaComp2.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
                  
                }else { // CASO SAIA COM 5 CARTAS
                if (pontComp <= pontJog) {
                    const cartaComp3 = comprarCarta()
                    pontComp += cartaComp3.valor
                    if (pontComp > 21) {
                        alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                            cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " . A pontuação do computador é " + pontComp + ". O usuário ganhou!")
                    } else if (pontComp > pontJog) {
                        alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                            cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
                    } else if (pontComp <= pontJog) {
                        const cartaComp4 = comprarCarta()
                        pontComp += cartaComp4.valor
                        if (pontComp > 21) {
                            alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + cartaJog4.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                                cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " . A pontuação do computador é " + pontComp + ". O usuário ganhou!")
                        } else if (pontComp > pontJog) {
                            alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + cartaJog4.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                                cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
                        } else if (pontComp <= pontJog) {
                            const cartaComp5 = comprarCarta()
                            pontComp += cartaComp5.valor
                            if (pontComp > 21) {
                                alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + cartaJog4.texto + cartaJog5.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                                    cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " " + cartaComp5.texto + " . A pontuação do computador é " +
                                    pontComp + ". O usuário ganhou!")
                            } else if (pontComp > pontJog) {
                                alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + cartaJog4.texto + cartaJog5.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                                    cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " " + cartaComp5.texto + ". A pontuação do computador é " +
                                    pontComp + ". O computador ganhou!")
                            }
                        } else {
                            alert("ERRO1")
                        }
                    } else {
                        alert("ERRO2")
                    }
                } else {
                    alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " + cartaComp1.texto + " " +
                        cartaComp2.texto + ". A pontuação do computador é " + pontComp + ". O computador ganhou!")
 
                }
                }
                }else { // CASO SAIA COM 4 CARTAS
            if (pontComp <= pontJog) {
                const cartaComp3 = comprarCarta()
                pontComp += cartaComp3.valor
                if (pontComp > 21) {
                    alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + " " + cartaJog4.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                        cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " . A pontuação do computador é " + pontComp + ". O usuário ganhou!")
                } else if (pontComp > pontJog) {
                    alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + cartaJog4.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                        cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
                } else if (pontComp <= pontJog) {
                    const cartaComp4 = comprarCarta()
                    pontComp += cartaComp4.valor
                    if (pontComp > 21) {
                        alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + cartaJog4.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                            cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " . A pontuação do computador é " + pontComp + ". O usuário ganhou!")
                    } else if (pontComp > pontJog) {
                        alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + cartaJog4.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                            cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
                    } else if (pontComp <= pontJog) {
                        const cartaComp5 = comprarCarta()
                        pontComp += cartaComp5.valor
                        if (pontComp > 21) {
                            alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + cartaJog4.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                                cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " " + cartaComp5.texto + " . A pontuação do computador é " +
                                pontComp + ". O usuário ganhou!")
                        } else if (pontComp > pontJog) {
                            alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + cartaJog4.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                                cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " " + cartaComp5.texto + ". A pontuação do computador é " +
                                pontComp + ". O computador ganhou!")
                        }
                    } else {
                        alert("ERRO1")
                    }
                } else {
                    alert("ERRO2")
                }
            } else {
                alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " + cartaComp1.texto + " " +
                    cartaComp2.texto + ". A pontuação do computador é " + pontComp + ". O computador ganhou!")
            }
            }
            }else { // CASO SAIA COM 3 CARTAS
        if (pontComp <= pontJog) {
            const cartaComp3 = comprarCarta()
            pontComp += cartaComp3.valor
            if (pontComp > 21) {
                alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                    cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " . A pontuação do computador é " + pontComp + ". O usuário ganhou!")
            } else if (pontComp > pontJog) {
                alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                    cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
            } else if (pontComp <= pontJog) {
                const cartaComp4 = comprarCarta()
                pontComp += cartaComp4.valor
                if (pontComp > 21) {
                    alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                        cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " . A pontuação do computador é " + pontComp + ". O usuário ganhou!")
                } else if (pontComp > pontJog) {
                    alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                        cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
                } else if (pontComp <= pontJog) {
                    const cartaComp5 = comprarCarta()
                    pontComp += cartaComp5.valor
                    if (pontComp > 21) {
                        alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                            cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " " + cartaComp5.texto + " . A pontuação do computador é " +
                            pontComp + ". O usuário ganhou!")
                    } else if (pontComp > pontJog) {
                        alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + " " + cartaJog3.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                            cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " " + cartaComp5.texto + ". A pontuação do computador é " +
                            pontComp + ". O computador ganhou!")
                    }
                } else {
                    alert("ERRO1")
                }
            } else {
                alert("ERRO2")
            }
        } else {
            alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " + cartaComp1.texto + " " +
                cartaComp2.texto + ". A pontuação do computador é " + pontComp + ". O computador ganhou!")

        }
        }
        }else { // CASO SAIA COM 2 CARTAS
        if (pontComp <= pontJog) {
            const cartaComp3 = comprarCarta()
            pontComp += cartaComp3.valor
            if (pontComp > 21) {
                alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                    cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " . A pontuação do computador é " + pontComp + ". O usuário ganhou!")
            } else if (pontComp > pontJog) {
                alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " + cartaComp1.texto + " " +
                    cartaComp2.texto + " " + cartaComp3.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
            } else if (pontComp <= pontJog) {
                const cartaComp4 = comprarCarta()
                pontComp += cartaComp4.valor
                if (pontComp > 21) {
                    alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                        cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " . A pontuação do computador é " + pontComp + ". O usuário ganhou!")
                } else if (pontComp > pontJog) {
                    alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " + cartaComp1.texto + " " +
                        cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
                } else if (pontComp <= pontJog) {
                    const cartaComp5 = comprarCarta()
                    pontComp += cartaComp5.valor
                    if (pontComp > 21) {
                        alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " +
                            cartaComp1.texto + " " + cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " " + cartaComp5.texto +
                            " . A pontuação do computador é " + pontComp + ". O usuário ganhou!")
                    } else if (pontComp > pontJog) {
                        alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " + cartaComp1.texto + " " +
                            cartaComp2.texto + " " + cartaComp3.texto + " " + cartaComp4.texto + " " + cartaComp5.texto + " . A pontuação do computador é " + pontComp + ". O computador ganhou!")
                    }
                } else {
                    alert("ERRO1")
                }
            } else {
                alert("ERRO2")
            }
        } else {
            alert("Suas cartas são " + cartaJog1.texto + " " + cartaJog2.texto + ". Sua pontuação é " + pontJog + ". As cartas do computador são " + cartaComp1.texto + " " +
                cartaComp2.texto + ". A pontuação do computador é " + pontComp + ". O computador ganhou!")

        }
        }
        }else { // FIM DE JOGO
    alert("O jogo acabou.")
}
