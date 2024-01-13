const elementoPorId = document.getElementById("meuId");

const elementPorId2 = document.querySelector("#meuId");

//Metodo mais utilizado es6

const elementPorClasse = document.querySelector(".minhaClasse");
console.log(elementPorClasse);

//manipulando conteudo de texto

const element = document.querySelector("#meuId");

console.log(element.textContent); 

setTimeout(() => {
    element.textContent = "mudei de texto"
}, 2000);

//Trabalhando com atributos

const link = document.querySelector("a");
console.log(link);

link.setAttribute("href", "https:/horadecodar.com.br/curso");

//Manipulação de classes do css

const elemento = document.querySelector("#meuId");

element.classList.add("novaClasse");

element.classList.remove("minhaClasse");

element.classList.toggle("outraClasse");

//Manipulando css

const elemento3 = document.querySelector("#meuId");

elemento3.style.color = "blue";
elemento3.style.backgroundColor = "red";

// background-color => backgroundColor

//Navegação entre nós

const element4 = document.querySelector("#meuInput");

const pai = element4.parentNode;

console.log(pai);

// obter o primeiro filho

const primeiroFilho = pai.firstChild;

console.log(primeiroFilho);

const ultimoFilho = pai.lastChild;

console.log(ultimoFilho);

//Manipulação de estrutura do DOM

const novoElemento = document.createElement("div");
console.log(novoElemento);

novoElemento.textContent = "Minha div JS";