let alugados = 0;

function alterarStatus(id){
    let gameItem = document.getElementById(`game-${id}`);
    let rentButton = gameItem.querySelector('a');
    let pictureButton = gameItem.querySelector('div')
    if(rentButton.innerHTML == "Alugar"){
    rentButton.classList.add('dashboard__item__button--return');
    pictureButton.classList.add('dashboard__item__img--rented');
    rentButton.innerHTML = "Devolver"
    alugados++;
    } else{
        rentButton.classList.remove('dashboard__item__button--return');
        pictureButton.classList.remove('dashboard__item__img--rented');
        rentButton.innerHTML = "Alugar";
        alert('Jogo devolvido com sucesso.')
    }
}
