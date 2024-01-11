//Manipulação de arrays

const frutas = ["Maça", "Laranja", "Uva"]

frutas.unshift("Acerola")

console.log(frutas)

frutas.shift();

console.log(frutas)

//map, filter, reduce => arrow function

const numeros = [1, 2, 3, 4, 5, 6]

//find retorna o primeiro elemento do criterio

const numeroPar = numeros.find((num) => num % 2 === 0);

console.log(numeroPar)

//find retorna todos os elementos que batem com o criterio.

const numerosPares = numeros.filter((num) => num % 2 === 0)
console.log(numerosPares)

//Manipulação de Strings

const frase = " Olá, mundo! ";

const palavras = frase.trim().split("   ");

console.log(frase)
console.log(palavras)

const frase2 = "Javascript é incrivel";

//verificar nome inicial
console.log(frase2.startsWith("Java"))
//verificar nome final
console.log(frase2.endsWith("vel"))

//Exceções e tratamentos de erros.

const idade = 15;

/*if(idade <18) {
    throw new Error("Você precisa ter pelo menos 18 anos")
}

console.log("Continuando o programa")
*/

try {
    const idade = 15;
    if(idade <18) {
    throw new Error("Você precisa ter pelo menos 18 anos")
}
}catch (error) {
    console.log(error)
}

console.log("Continuando o programa")

// callback  => função executada por outra função

function cumprimentar(nome, callback) {
    console.log("Olá, " + nome);
    callback();

    function monstrarSaudacao() {
        console.log("Como você está?")

        cumprimentar("Felipe", monstrarSaudacao);

        cumprimentar("Liza", function(){
            console.log("Ta tudo bem?")
        })
    }
}

// settimeout ==> executa algo em um tempo determinado.

function mostrarMensagem() {
    console.log("Essa mensagem será exibida em 3 segundos.");
}

setTimeout(mostrarMensagem, 3000);

//Promises

const promessa = new Promise((resolve, reject) => {
    const condicao = true;

    if(condicao) {
        resolve("A condição é verdadeira")
    }else {
        reject("A condição é falsa")
    }
});

promessa.then((mensagem) => {
    console.log(mensagem);
})
.catch((erro) => {
    console.log(erro);
});

// Bibliotecas feitas que são "promise based"


const promise1 = Promise.resolve(3);
const promise2 = new Primise((resolve, reject) => {
    setTimeout(resolve, 2500, "testando")
});

Promise.all([promise1, promise2]).then((valores) => {
    console.log(valores)
})

// Async Await

async function obterValor() {
    const promise1 = Promise.resolve(3);
    const promise2 = new Primise((resolve, reject) => {
    setTimeout(resolve, 2500, "valor obtido")
});

}

obterValor();

// JSON

const objeto = {nome: "João", idade: 30}

const jsonString = JSON.stringify(objeto)

console.log(jsonString);
console.log(typeof jsonString);

//Convertendo para json
const json = '{"nome:" "João", "idade:" "30"}'

const objeto2 = JSON.parse(json);

console.log(objeto2)

