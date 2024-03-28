function gravarCliente(){
    cliente = new Cliente();

    let codigo = document.getElementById('codigo').value;
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;

    cliente.setCodigo(codigo);
    cliente.setNome(nome);
    cliente.setIdade(idade);
    cliente.setTelefone(telefone);
    cliente.setEmail(email);

    console.log(cliente);

    localStorage.setItem(cliente.getCodigo(),JSON.stringify(cliente));

}