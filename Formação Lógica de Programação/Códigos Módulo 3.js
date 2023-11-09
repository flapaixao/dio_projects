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

