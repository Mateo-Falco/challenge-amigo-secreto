let amigos = [];

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function agregarAmigo(){
    let amigo = document.querySelector("#amigo").value;
    if (amigo === ""){
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo);
        console.log(amigos);
        document.querySelector("#amigo").value = "";
        mostrarAmigos();
    }
}

function sortearAmigo(){
    let resultado = document .getElementById('resultado');
    
    if (amigos.length === 0 ){
        resultado.innerHTML = "No hay amigos para sortear";
    }else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        resultado.innerHTML = (`El amigo sorteado fue ${amigoSorteado}!`);
        amigos.splice(indiceAleatorio,1);
        mostrarAmigos();
    }
    
}