var minhaVariavel = "Olá JS";

console.log(minhaVariavel)

//Comentários

var nom1 = "Array"
var nome = "Felipe"
const constante = "imutavel"

/*
Comentarios de multiplas linhas
*/

var  meuNumero = 10;

if(meuNumero>=5) {
    console.log("Numero maior que 5")
}else {
    false
}

var meuArray = [ 1,2,3,4];

console.log(meuArray)

meuArray.push(5)

var meuObjeto = {};
var meuArr = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(typeof meuObjeto);
console.log(typeof meuArr);
console.log(typeof meuNull);
console.log(typeof meuUndefined);

let x = 10;
const y = 15;

console.log(x, y)
console.log(x == y)
console.log(x != y)
console.log("5" === 5)

// Operadores Logicos
//AND = &&
//OR ||

console.log(10 > 5 && 20 >5);

console.log(10 > 5 || 20 >5)
console.log(10 >5 && 20 < 5)

//Estrutura de condição 

const idade = 20;

if(idade < 15) {
    console.log("adolescente")
}else if (idade > 18) {
    console.log("Adulto")
}

//Switch 

const fruta = "Banana"

switch(fruta) {
    case  "Banana":
        console.log("Banana é a fruta");
        break
    case "Maça":
            console.log("Maça é a fruta")
            break
        default:
            console.log("Fruta não encontrada")
}

//Estrutura de Repetição

for(let i = 0; i < 5; i = i++) {
    console.log("O Valor de i é: " +i);
}

// while  = necessário declarar o valor inicial 

let k = 0;

while(i < 5) {
    console.log("O valor de k: " + k )
    i++;
}