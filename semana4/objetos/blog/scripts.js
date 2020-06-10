const postagem = {
    titulo: '',
    conteudo: '',
    autor: '',
    categoria:'',
}

function postar() {
    let pegarTitulo = document.getElementById("inputTitulo")
    let tituloPost = pegarTitulo.value
    postagem.titulo =  tituloPost

    let pegarConteudo = document.getElementById("conteudo")
    let conteudoPost = pegarConteudo.value
    postagem.conteudo = conteudoPost

    let pegarAutor = document.getElementById("inputAutor")
    let autorPost = pegarAutor.value
    postagem.autor = autorPost

    let pegarCategoria = document.getElementById("inputCategoria")
    let categoriaPost = pegarCategoria.value
    postagem.categoria = categoriaPost

    let postFull = {tituloPost, conteudoPost, autorPost, categoriaPost}

    let pegarImagem = document.getElementById("inputImagem")
    let imagemPost = pegarImagem.value

    console.log(postFull)

    inputTitulo.value = ""
    conteudo.value = ""
    inputAutor.value = ""
    inputCategoria.value =""

    let pegarPostagens = document.getElementById("postsBlog")
    if (pegarImagem.value === "Link para imagem"){
        pegarPostagens.innerHTML += `<h2>${postFull.tituloPost}</h2><p>${postFull.conteudoPost}</p><i>por </i><h3>${postFull.autorPost}</h3><i> na categoria </i><h3>${postFull.categoriaPost}</h3> <br><br><br>`
    }else{
        pegarPostagens.innerHTML += `<h2>${postFull.tituloPost}</h2><img src=${imagemPost}><p>${postFull.conteudoPost}</p><i>por </i><h3>${postFull.autorPost}</h3><i> na categoria </i><h3>${postFull.categoriaPost}</h3> <br><br><br>`
    }
    window.open('index.html', '_blank');
}
