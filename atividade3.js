function adicionarItem(){
    let lista = document.getElementById("lista");
    let novoItem = document.createElement("li");
    novoItem.textContent = "item 3";
    lista.appendChild(novoItem);

}