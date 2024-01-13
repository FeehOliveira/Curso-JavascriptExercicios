const listaDeCompras = []
listaDeCompras.push("Leite", "Ovos", "Pão", "Manteiga", "Queijo");

listaDeCompras.shift()

console.log(listaDeCompras);

//Exercicio 2

const meuArray = [3, 7, 14, 21, 29, 36, 42]

const numero = meuArray.find((num) => num > 10 && num % 7 === 0);

console.log(numero);

//Exercicio 3 

const meusNumeros = [5, 10, 15, 20, 25, 30, 35, 40]

const newNumero = meusNumeros.filter((num) => num > 20);

console.log(newNumero);

//Exercicio 4

const frase = " Bom dia, Mundo! ";

const palavras = frase.trim().split(" ");

console.log(palavras);

//Exercicio 5

const frase2 = "O rato rou a roupa do rei de roma";

const comecaCom = frase2.startsWith("o")
const terminaCom = frase2.endsWith("roma")

console.log(comecaCom);
console.log(terminaCom);

