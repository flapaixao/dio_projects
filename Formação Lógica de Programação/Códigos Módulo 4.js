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

