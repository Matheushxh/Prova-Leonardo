function carregaMenu(caminhoMenu){
    fetch(caminhoMenu)
        .then((response) => response.text())
        .then((html)=>{
            document.getElementById("menu").innerHTML = html;
        });
}