/*
REFATORAÇÃO - O QUE É?
É UM PROCESSO DISCIPLINADO DE REESTRUTURAR O CÓDIGO EXISTENTE DE MODO A MELHORAR A SUA ESTRUTURA INTERNA, SEM ALTERAR SEU COMPORTAMENTO EXTERNO

POR QUE REFATORAR?

*/

// Exemplo 1 = renomear variáveis 

let x = 10
let y = 20
let z = x + y;
console.log(z)

let numeroUm = 10
let numeroDois = 20
let soma = numeroUm + numeroDois;
console.log(soma)

//exemplo dois - extrair constantes
//antes
function calcularPrecoFinal(preco){
    return preco + (preco * 0.15)//15% de imposto
}
//depois
const taxa_imposto = 0.15;
function calcularPrecoFinal(preco){
    return preco + (preco * taxa_imposto)
}
// exemplo 3 - simplificar expressão
//antes
if(idade > 18){
    var podeEntrar = True
}else{
    var podeEntrar = false
}
//depois
let podeEntrar = idade > 18;

//exemplo 4 - combinar condiçoes
//antes
if(idade < 18){
    console.log("Acesso negado");
}else if(naoTemRg){
    console.log("Acesso negado")
}
//depois
if(idade< 18 || naoTemRg){
    console.log("Acesso negado")
}