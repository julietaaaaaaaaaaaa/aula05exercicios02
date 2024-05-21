class Produto{
    constructor (nome, preco, quantidade){
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
}
//A
valorTotal() {
   console.log (this.preco * this.quantidade )
}

//B
atualizarQuantidade(quantidade) {
   console.log (this.quantidade + quantidade)
}
//C
verificarDisponibilidade(){
    if(this.quantidade <=0){
    console.log("Indisponível");
    }else{
    console.log("Disponível")
    }
}
//D
aplicarDesconto(valor){
    console.log(this.preco - valor)
}
//E
calcularPrecoTotal(quantidade){
    console.log(this.preco + quantidade)
}
//F
verificarPromocao(){
if(this.preco <=38000){
    console.log("Preço promocional imperdível!")
}else{
    console.log("Produto não está em promoção!")
}
}
//G
removerEstoque(quantidade){
    console.log(this.quantidade - quantidade)
    console.log("removidos do estoque:")
}
//H
aumentarPrecoPercentual(PrecoPercentual){
    console.log(this.preco + PrecoPercentual/100 )
}
//I
calcularPrecoUnitario(){
    console.log(this.preco)
}
//J
verificarEstoqueMinimo(){
    if(this.quantidade = 2){
        console.log("quantidade abaixo do estoque mínimo desejado")
    }else{
        console.log("quantidade acima do estoque mínimo")
    }
}
//K
duplicarEstoque(){
    console.log(this.quantidade * 2)
}
//L
calcularValorVenda(lucro){
    console.log(this.preco - lucro)
}
//M
calcularValorTotalEstoque(quantidadeestoque){
    console.log(this.preco * quantidadeestoque)

}
//N
verificarEstoqueBaixo(){
    if(this.quantidade <= 1){
        console.log("Quantidade de estoque baixissíma")
    }else{
        console.log("Quantidade de estoque considerada alta!")
    }
}
//O
reiniciarEstoque(){
    console.log(this.quantidade =0)
}
//P
reabastecerEstoque(reabastecimento){
console.log(this.quantidade + reabastecimento)
}
//Q
calcularValorMedio(quantidade){
console.log((this.preco * quantidade) / quantidade) // multiplicando preco pela quantidade e dividindo pela quantidade comprada
}
//R
calcularPrecoComImpostos(impostos){
    console.log(this.preco + impostos)
}
}

let produto = new Produto("Carro", 45000, 10);
produto.valorTotal();
produto.atualizarQuantidade(20);
produto.verificarDisponibilidade(0);
produto.aplicarDesconto(1000);
produto.calcularPrecoTotal(1000);
produto.verificarPromocao(40000);
produto.removerEstoque(4);
produto.aumentarPrecoPercentual(50000);
produto.calcularPrecoUnitario();
produto.verificarEstoqueMinimo(2);
produto.duplicarEstoque();
produto.calcularValorVenda(20000);//
produto.calcularValorTotalEstoque(5);
produto.verificarEstoqueBaixo(3);
produto.reiniciarEstoque();
produto.reabastecerEstoque(4);
produto.calcularValorMedio(5);
produto.calcularPrecoComImpostos(1800);