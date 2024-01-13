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

document.body.appendChild(novoElemento);

//Eventos

const botao = document.querySelector("button");

botao.addEventListener("click", function (){
    console.log("Botao funcionando!")
})

//Mouse

const elemento5 = document.querySelector("#meuFormulario")

elemento5.addEventListener("mouseover", function(){
    console.log("o mouse passou aqui.")
})

//Teclado

const campoInput = document.querySelector("meuInput");

campoInput.addEventListener("keydown", function() {
    console.log("Tecla pressionada.")
});

//formulario

const form = document.querySelector("form");

form.addEventListener("submit", function() {
    console.log("Enviado")
});

//Propagação de eventos

document.querySelector("#elementoPai").addEventListener("click", function(){
    console.log("Click Capturado.")
});

document.querySelector("#elementoFilho").addEventListener("click", function(event) {
    
    //event.stopPropagation();
    console.log("Elemento Filho")
});

document.querySelector("#meuLink").addEventListener("click", function(event) {
    event.preventDefault();

    console.log("Clicou no link")
});

//Delegação de eventos

document.querySelector("#elementoPai").addEventListener("click", function() {
    if(event.target.matches(".classeDosFilhos")) {
        console.log("evento propagado")
    }
});