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
    if(this.quantidade <= 0){
console.log("Indisponível");
    }else{
console.log("Disponível")
    }
}
//D
aplicarDesconto(valor){
console.log(this.preco - valor)
}
}

 

let produto = new Produto("Carro", 45000, 10);
produto.valorTotal();
produto.atualizarQuantidade(20);
produto.verificarDisponibilidade(0);
produto.aplicarDesconto(1000);
