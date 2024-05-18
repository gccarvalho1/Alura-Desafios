
let contador = 0;
let subTotal = 0;
limpar();
function adicionar(){
    if (contador == 1){
        subTotal = 0;
        contador = 0;
    }
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseInt(produto.split('R$')[1]);
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
  </section>`
    subTotal = subTotal + (quantidade*valorProduto);
    let total = document.getElementById('valor-total')
    total.textContent = `R$${subTotal}`
    document.getElementById('quantidade').value = 0;

}
function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    let total = document.getElementById('valor-total')
    total.textContent = `R$${0}`
    contador = 1;
}
