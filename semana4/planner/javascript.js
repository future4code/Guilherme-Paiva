function funcDiaSemana() {
    document.getElementById("drop").classList.toggle("show");
}

function reescrever1() {
    const trocaTexto = document.getElementById("diaSemana")
    trocaTexto.innerHTML = "Segunda-feira"
    document.getElementById("drop").classList.toggle("show")
}
function reescrever2() {
    const trocaTexto = document.getElementById("diaSemana")
    trocaTexto.innerHTML = "Terça-feira"
    document.getElementById("drop").classList.toggle("show")
}
function reescrever3() {
    const trocaTexto = document.getElementById("diaSemana")
    trocaTexto.innerHTML = "Quarta-feira"
    document.getElementById("drop").classList.toggle("show")
}
function reescrever4() {
    const trocaTexto = document.getElementById("diaSemana")
    trocaTexto.innerHTML = "Quinta-feira"
    document.getElementById("drop").classList.toggle("show")
}
function reescrever5() {
    const trocaTexto = document.getElementById("diaSemana")
    trocaTexto.innerHTML = "Sexta-feira"
    document.getElementById("drop").classList.toggle("show")
}
function reescrever6() {
    const trocaTexto = document.getElementById("diaSemana")
    trocaTexto.innerHTML = "Sábado"
    document.getElementById("drop").classList.toggle("show")
}
function reescrever7() {
    const trocaTexto = document.getElementById("diaSemana")
    trocaTexto.innerHTML = "Domingo"
    document.getElementById("drop").classList.toggle("show")
}

function planejar() {
    const meuInput = document.getElementById("tarefas")
    let tarefaLista = meuInput.value   
    if (tarefaLista === ""){
        alert("Favor digitar alguma tarefa!")
    }else{
    const meuDiaSemana = document.getElementById("diaSemana")
    let dia = meuDiaSemana.innerHTML
        if (dia === "Segunda-feira"){
            const escreveTarefa = document.getElementById("tarefaSegunda")
            escreveTarefa.innerHTML += `<li> ${tarefaLista} </li>`
            tarefas.value = ""
        }else if (dia === "Terça-feira"){
            const escreveTarefa = document.getElementById("tarefaTerca")
            escreveTarefa.innerHTML += `<li> ${tarefaLista} </li>`
            tarefas.value = ""
        }else if (dia === "Quarta-feira"){
            const escreveTarefa = document.getElementById("tarefaQuarta")
            escreveTarefa.innerHTML += `<li> ${tarefaLista} </li>`
            tarefas.value = ""
        }else if (dia === "Quinta-feira"){
            const escreveTarefa = document.getElementById("tarefaQuinta")
            escreveTarefa.innerHTML += `<li> ${tarefaLista} </li>`
            tarefas.value = ""
        }else if (dia === "Sexta-feira"){
            const escreveTarefa = document.getElementById("tarefaSexta")
            escreveTarefa.innerHTML += `<li> ${tarefaLista} </li>`
            tarefas.value = ""
        }else if (dia === "Sábado"){
            const escreveTarefa = document.getElementById("tarefaSabado")
            escreveTarefa.innerHTML += `<li> ${tarefaLista} </li>`
            tarefas.value = ""
        }else{
            const escreveTarefa = document.getElementById("tarefaDomingo")
            escreveTarefa.innerHTML += `<li> ${tarefaLista} </li>`
            tarefas.value = ""      
        }
    }
}

function riscaTarefa() {
    const meuTexto = document.getElementById("tarefaSegunda")
    let textoRisc = meuTexto.value
    alert(escreveTarefa)
}
