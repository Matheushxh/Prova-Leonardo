function gravarPessoa(){

    const pessoa1 = new Pessoa();

    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;

    pessoa1.setNome(nome);
    pessoa1.setIdade(idade);
    pessoa1.setTelefone(telefone);
    pessoa1.setEmail(email);

    console.log(pessoa1);

    localStorage.setItem(pessoa1.getEmail(),JSON.stringify(pessoa1));

}


function gravarProduto(){
    const produto = new Produtos();

    let codigo = document.getElementById('codigo').value; //aqui
    let titulo = document.getElementById('titulo').value;
    let descricao = document.getElementById('descricao').value;
    let valor = document.getElementById('valor').value;
    let quantidade = document.getElementById('quantidade').value;

    produto.setCodigo(codigo); //aqui
    produto.setTitulo(titulo);
    produto.setDescricao(descricao);
    produto.setValor(valor);
    produto.setQuantidade(quantidade);

    console.log(produto);

    localStorage.setItem(produto.getCodigo(),JSON.stringify(produto));

}