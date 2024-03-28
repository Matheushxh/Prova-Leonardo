function gravarProduto(){
    const produto = new Produtos();

    let codigo = document.getElementById('codigo').value;
    let titulo = document.getElementById('titulo').value;
    let descricao = document.getElementById('descricao').value;
    let valor = document.getElementById('valor').value;
    let quantidade = document.getElementById('quantidade').value;

    produto.setCodigo(codigo);
    produto.setTitulo(titulo);
    produto.setDescricao(descricao);
    produto.setValor(valor);
    produto.setQuantidade(quantidade);

    console.log(produto);

    localStorage.setItem(produto.getCodigo(),JSON.stringify(produto));

}