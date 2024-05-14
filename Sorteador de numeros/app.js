let matriz = [];

function sortear() {
  let numberQtd = document.getElementById('quantidade').value;
  let rangeStart = parseInt(document.getElementById('de').value);
  let rangeStop = parseInt(document.getElementById('ate').value);
  if(numberQtd < (rangeStop - rangeStart)){
        if(rangeStart < rangeStop){
        obterNumberAleatorio(numberQtd, rangeStart, rangeStop);
        } else{
            alert('Defina um valor válido para o número maximo. Seja maior que o range mínimo!');
            document.getElementById('quantidade').value = '';
            document.getElementById('de').value = '';
            document.getElementById('ate').value= '';
        }
    } else{
        alert('Defina um valor válido para quantidade de número.');
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value= '';
    }
}

function obterNumberAleatorio(numberQtd, rangeStart, rangeStop){
    for (let i = 0; i < numberQtd; i++) {
    let valorRandom = Math.floor(Math.random() * (rangeStop - rangeStart + 1)) + rangeStart;
    while(matriz.includes(valorRandom)) {
        valorRandom = Math.floor(Math.random() * (rangeStop - rangeStart + 1)) + rangeStart;
    }
    matriz.push(valorRandom);
  }
  let exibirText = document.getElementById('resultado').querySelector('label');
  exibirText.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${matriz}</label>`;
  alterarStatusBotao();
}

function alterarStatusBotao(){
    let botton = document.getElementById('btn-reiniciar');
    if(botton.classList.contains('container__botao-desabilitado')){
        botton.classList.remove('container__botao-desabilitado');
        botton.classList.add('container__botao');
    } else{
        botton.classList.remove('container__botao');
        botton.classList.add('container__botao-desabilitado');
    }
}
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value= '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}