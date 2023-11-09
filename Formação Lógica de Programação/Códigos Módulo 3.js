// Trabalhando com Estruturas Condicionais (if, else if, else)

// if
let ehLigado = false

if(ehLigado){
  console.log("executou comando") //esse comando não vai retornar nada porque não tem o que comparar.
}

if(1 === 1){
  console.log("executou comando") //esse comando vai retornar  o valor True
}

let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
itensComprados = "Leite"
}
else{
console.log("passou na sessão de congelados")
itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)

//if,else if ,else
let nivelDeFome =  "1"

if(nivelDeFome === 1){
console.log("pouca fome")
}else if(nivelDeFome ===2){
console.log("muita fome")
}else{
console.log("Você comeria mais que o pica pau")
}

// estrutura de decisão
// switch/case/break/default
let fruta = "banana"

switch (fruta){
  case "laranja":
  console.log("suco de laranja")

  case "banana":
  console.log("vitamina de banana")

}

// BREAK
// Veja que se você continuar colocando cases o código vai executar tudo sem levar a lógica em consideração.

let fruta = "banana"

switch (fruta){
  case "laranja":
  console.log("suco de laranja")

  case "banana":
  console.log("vitamina de banana")
  
  case "maçã":
  console.log("suco de maçã")
}

// Para que isso não ocorra, é necessário utilizar o break para informar quando ele tem que parar.
let fruta = "banana"

switch (fruta){
  case "laranja":
  console.log("suco de laranja")
  break

  case "banana":
  console.log("vitamina de banana")
  break

  case "maçã":
  console.log("suco de maçã")
}

// DEFAULT
// Serve para trazer uma opção genérica caso o código não encontre nenhum das opções que tem nos cases.

let fruta = "uva"

switch (fruta){
  case "laranja":
  console.log("suco de laranja")
  break

  case "banana":
  console.log("vitamina de banana")
  break

  case "maçã":
  console.log("suco de maçã")
  break

  default:
  console.log("suco genérico")
}



// Outros Exemplos
let dia = "terça"; // Você pode mudar isso para outros dias

switch (dia) {
  case "segunda":
    console.log("Dia de começar a semana com energia!");
    break;
  case "terça":
    console.log("Hora de aprender coisas novas!");
    break;
  case "quarta":
    console.log("Metade da semana, continue firme!");
    break;
  case "quinta":
    console.log("Quase lá, um pouco mais de esforço!");
    break;
  case "sexta":
    console.log("Dia de comemorar, o fim de semana está chegando!");
    break;
  default:
    console.log("Final de semana! Descanse e divirta-se!");
}


// ESTRUTURAS DE REPETIÇÃO
// for
for (let contador = 0; contador < 4; contador++){
  console.log(contador)
}

// for
let pontosDeVida = 0

// exemplo
for(let i = 0; i < 11; i++){
  pontosDeVida += 1
  console.log("Tomou poção mágica " + i)
}

console.log(pontosDeVida + " Totais")

// while
let contador = 0

while(contador < 3){
  console.log("ola")
  contador++
}

// do while
let contador = 3

do {
  console.log("ola")
  contador++
} while (contador < 3)
