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

/*
for(let i = 0; i < 5; i = i++) {
    console.log("O Valor de i é: " +i);
}
*/


// while  = necessário declarar o valor inicial 

let k = 0;

while(k < 5) {
    console.log("O valor de k: " + k )
    k++;
}

// Funções

function cumprimentar(nome) {
    console.log("Olá, " + nome)
}

cumprimentar("Felipe")

// Escopo de variaveis

let cor = "Azul"

function mostrarCor() {
    let cor = "verde";

    console.log(cor)
}

mostrarCor();

// hoisting = içamento

testeHoisting();

function testeHoisting() {
    console.log("Deu Certo!")
}

// arrow function

const testeArrow = () => { console.log("Function Arrow")};

testeArrow();

// trusthy e falsy

const minhaVariavel1 = " " //falsy
const minhaVariave2 = "Texto" //

if(minhaVariave2) {
    console.log("Verdadeiro")
}else {
    console.log("Falso")
}

// array, listas

const numeros = [1,2,3,4,5]

console.log(numeros)

numeros.push(6);

console.log(numeros)

numeros.pop(6)

console.log(numeros)

// strings

const minhaString = "Olá,"

const minhaString2 = minhaString + "Tudo bem?"

console.log(minhaString2)

//interpolação

let nome5 = "Felipe"

const minhaString4 = `Olá ${nome5}, como você está`;

console.log(minhaString4)
console.log(minhaString4.length);
console.log(minhaString4[5])
console.log(minhaString4.toUpperCase())

// Data e Hora

const agora = Date();
console.log(agora);

const natal = new Date(2023, 11, 25)

console.log(natal)

// Math

console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));


