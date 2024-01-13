//Exercicios de fundamentos

console.log("Olá, Mundo!")

//conversão de tipos

let meuNumero = 30;

console.log(typeof meuNumero)

//Contagem de palavras

let nome = "Felipe Oliveira";

const quantiadeLetras = nome.length

console.log(quantiadeLetras)

const numeroPalavras = nome.split(" ").length

console.log(numeroPalavras)

//Loops e Arrays

const nomes =["Felipe", "Liza", "Pamela", "Sandra"]

for(let i = 0; i < nomes.length; i++) {

    console.log(nomes[i])

}

//Funções, Strings e Math
/*
function converterHorario(horario24) {

    //14:20 => hora = 14, minuto = 20 => split

    const hora = horario24.split(":")[0]
    const minuto = horario24.split(":")[0]

    const hora12 = hora % 12 || 12;

    let periodo = "AM";

    if (hora >12 ) {
        periodo = "PM"
    }

    console.log(hora, hora12, minuto)
}

converterHorario("15:16");

console.log(`${hora12}:${minuto} ${periodo}`)


converterHorario("15:16");
converterHorario("09:45");
converterHorario("21:16");
*/