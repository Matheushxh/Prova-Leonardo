function getLocalStorageData(){
    const localStorageData = Object.entries(localStorage);
    const dadosObjeto = localStorageData.map(([key, value]) =>{
        return JSON.parse(value);
    })
    console.log(dadosObjeto);
    return dadosObjeto;
}

function gerarTabela(dados){
    const tablebody = document.querySelector("#tabela tbody");
    tablebody.innerHTML = "";


    for(const object of dados){
        const linhas = document.createElement("tr");
        for(const value of Object.values(object)){
            const colunas = document.createElement("td");
            colunas.textContent = value;
            linhas.appendChild(colunas);

        }
        tablebody.appendChild(linhas);
    
    }
}
