let pista = 100
let superior = 200;
let inferior = 400;
function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    registerBuy(tipoIngresso.value,qtd);
}    
function registerBuy(tipe,qtd){
    if(tipe == 'pista' && qtd <= pista){
        pista = pista - qtd;
        document.getElementById('qtd-pista').innerHTML = `${pista}`;
    }
    if(tipe == 'superior' && qtd <= superior){
        superior = superior - qtd;
        document.getElementById('qtd-superior').innerHTML = `${superior}`;
    }
    if(tipe == 'inferior' && qtd <= inferior){
        inferior = inferior - qtd;
        document.getElementById('qtd-inferior').innerHTML = `${inferior}`;
    } else{
        alert(`Quantidade indisponível para tipo ${tipe}`);
    }
}