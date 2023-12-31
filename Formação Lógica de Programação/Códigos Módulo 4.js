// Trabalhando com funções

torrar()
injetarPao()

function torrar(){
  console.log("torrando pão")
}

function injetarPao(){
  console.log("preparando para injetar o pão")
  console.log("finalizado")
}

// Não começar funções com numeros
// É recomendado que uma função execute apenas uma coisa

// função que chama todas de uma vez
mainSaveData()

function mainSaveData(){
  getData()
  checkValues()
  sendToDataBase()
}

function getData(){
  console.log("pegando dados do usuário")
//lógica implementada aqui
}

function checkValues(){
   console.log("validando dados")
}

function sendToDataBase(){
   console.log("cadastrando dados")
}

// outros exemplos
torrar("pão na chapa", "Felipe")

function torrar(pao, nome, valor=99.00){
  console.log("Torrada feita com " + pao)
  console.log("Ele é um pedido de " + nome) 
  console.log("O valor total é " + valor)
}

// FUNÇÕES DE RETORNO

let resultado = soma(5, 5)

function soma(numA, numB){
  let somatorio = numA + numB
  return somatorio
}

console.log("O Resultado dessa função " + resultado)

// exemplo

let userName = getFirstName("Flavia-Moraes", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Flavia Moraes", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
	let firstName = name.split(splitChar)[0]
    return firstName
}

//

function somar(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = somar(5, 3); // A função vai dar de presente 5 + 3 = 8
console.log("A soma é: " + resultado); // Vai mostrar A soma é: 8


