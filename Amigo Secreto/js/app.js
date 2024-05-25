let matrizNomes = [];

function adicionar() {
    let nomeInclude = document.getElementById('nome-amigo');
        if(nomeInclude.value == ''){
            alert('Digite um nome válido.')
            return;
        } 
        if (matrizNomes.includes(nomeInclude.value)) {
            alert('Nome já adicionado!');
            return;
        } else{
            matrizNomes.push(nomeInclude.value);
            let incluidos = document.getElementById('lista-amigos');
            incluidos.innerHTML = matrizNomes.join(', ');
            nomeInclude.value = '';
        }
}

function sortear() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
    if(matrizNomes.length >= 4){
        embaralha(matrizNomes);
        for (let i = 0; i < matrizNomes.length; i++) {
            if (i == matrizNomes.length - 1) {
                sorteio.innerHTML += `${matrizNomes[i]} --> ${matrizNomes[0]}<br>`;
            } else {
                sorteio.innerHTML += `${matrizNomes[i]} --> ${matrizNomes[i + 1]}<br>`;
            }
        }
    } else {
        alert('O número mínimo de participantes é 4!');
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    matrizNomes = [];
    let incluidos = document.getElementById('lista-amigos');
    incluidos.innerHTML = '';
    let idMsg = document.getElementById('lista-sorteio');
    idMsg.innerHTML = '';
}
