const listaPessoa = [];

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