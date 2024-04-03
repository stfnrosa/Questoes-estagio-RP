//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
let numeroInserido = 55;

function ehFibonacci (numero){
    let anterior = 0;
    let atual = 1;
    while (atual <= numero){
        if(atual === numero){
            return true;
        }
        let proximo = atual + anterior;
        anterior = atual;
        atual = proximo;
    }
    return false
}

if (ehFibonacci(numeroInserido)){
    console.log(`${numeroInserido} é Fibonacci`)
}else{
    console.log(`${numeroInserido} não é Fibonacci`)
}