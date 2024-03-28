class Produtos{
    codigo;
    titulo;
    descricao;
    valor;
    quantidade;

    setCodigo(codigo){
        this.codigo = codigo;
    }

    getCodigo(){
        return this.codigo;
    }

    setTitulo(titulo){
        this.titulo = titulo;
    }
    getTitulo(){
        return this.titulo;
    }
    
    setDescricao(descricao){
        this.descricao = descricao;
    }
    getDescricao(){
        return this.descricao;
    }

    setValor(valor){
        this.valor = valor;
    }
    getValor(){
        return this.valor;
    }

    setQuantidade(quantidade){
        this.quantidade = quantidade;
    }
    getQuantidade(){
        return this.quantidade;
    }
}