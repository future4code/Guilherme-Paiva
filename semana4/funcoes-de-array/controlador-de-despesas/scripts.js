let arrayDespesas = []

function cadastrar() {

    let despesas = {
        valor: 0,
        tipo: '',
        descricao: '',
    }

    let pegarDespesa = document.getElementById("inputValor")
    let despesaValor = pegarDespesa.value
    if (despesaValor !== ""){
        despesas.valor = despesaValor

    let pegarTipoDespesa = document.getElementById("inputTipoDespesa")
    let despesaTipo = pegarTipoDespesa.value
    if (despesaTipo !== ""){
        if (despesaTipo === "0"){
            despesas.tipo = 'Casa'
        }else if (despesaTipo === "1"){
            despesas.tipo = "Alimentação"
        }else if (despesaTipo === "2"){
            despesas.tipo = "Viagem"
        }else if (despesaTipo === "3"){
            despesas.tipo = "Outros"
        }
    
        let pegarDescricao = document.getElementById("inputDescricao")
        let despesaDescricao = pegarDescricao.value
        if (despesaDescricao !== ""){
        
        despesas.descricao = despesaDescricao

            }else{
                alert("Favor preencher o campo Descrição")
            }
    }else{
        alert("Favor preencher o campo Tipo")
    }
}else{
    alert("Favor preencher o campo Valor")
}
    arrayDespesas.push(despesas)
    
    inputValor.value = ''
    inputTipoDespesa.value = ''
    inputDescricao.value = ''
    
    console.log(arrayDespesas)
}

function filtrar() {

    todasDespesas.value = ''

    const despesasCasa = arrayDespesas.filter((tipo, index, array) => {
        return    
    })
}

function exibirListaDespesas(){
    let pegarTodasDespesas = document.getElementById("todasDespesas")
    pegarTodasDespesas.innerHTML += `<p>Valor: R$</p><p>Tipo: </p><p>Descrição: </p><br>`
}

