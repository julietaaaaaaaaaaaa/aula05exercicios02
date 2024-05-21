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
//mensagem aparecendo embaixo e nao ao lado (n consegui mudar)
}
//H
aumentarPrecoPercentual(PrecoPercentual){
    console.log(this.preco + PrecoPercentual/100 )
}
//I
calcularPrecoUnitario(){
    console.log(this.preco)
//aparecendo quantidade e nao o preco unitario
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
//this.quantidade * estoque (10*2) tinha que aparecer 20, mas esta aparecendo 4
}
//L
calcularValorVenda(){

}
//M

}



 

let produto = new Produto("Carro", 45000, 10);
// produto.valorTotal();
// produto.atualizarQuantidade(20);
// produto.verificarDisponibilidade(0);
// produto.aplicarDesconto(1000);
// produto.calcularPrecoTotal(1000);
// produto.verificarPromocao(40000);
// produto.removerEstoque(4);
// produto.aumentarPrecoPercentual(50000);
// produto.calcularPrecoUnitario();
// produto.verificarEstoqueMinimo(1);
produto.duplicarEstoque();