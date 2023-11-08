// OPERADORES ARITMETICOS

let idade = 30
console.log(idade)

idade = 30 + 6
console.log(idade)

idade = 30 - 6
console.log(idade)

// concatenando com um texto
idade = 30
console.log("valor da minha variável " + idade)

idade = 30 + 6
console.log("operação de adição " + idade)

idade = 30 - 6
console.log("operação de subtração " + idade)

// Fazendo o calculo com variáveis e números
let codigoDoProduto = 1023
let codigoExtao = codigoDoProduto - 1000
console.log(codigoExtao)

// Fazendo o calculo atribuindo variáveis... sem utilizar os numeros
let primeiroNumero = 1023
let segundoNumero = 23
console.log(primeiroNumero - segundoNumero)

let precoProduto = 100.99
let valorComTaxo = precoProduto * 2
console.log(valorComTaxo)

let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log("resultado da multiplicação é " + produto)

// atribuindo novo valor para variável
multiplicador = 8
produto = multiplicador * multiplicando
console.log("resultado da multiplicação é " + produto)

let notadoMercado = 50
let pessoasParaDividir = 2
console.log("operação de divisão :" + notadoMercado / pessoasParaDividir)

// Incremento e Decremento

let contador = 1
// "++" incremento
contador++
console.log(contador)

// "--" decremento
contador--
contador--

console.log(contador)

// Calcular e Atribuir
let preco = 10
preco += 4

console.log(preco)

___________________________________________________________________________
// OPERADORES DE COMPARAÇÃO

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteudo
// !== é diferente

let numero = "1"
console.log(numero == 1)

numero = "1"
console.log(numero === 1)

let marca = "Apple"
console.log(marca !== "Samsung")

// Guardar o valor em uma variável de resultado TRUE?FALSE
let marca = "Apple"
let resultado = marca === "Samsung"

console.log(resultado)

// Guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado? " + ehCPFBloqueado)

// Guardar o valor em uma variável de resultado TRUE?FALSE
let CPFPermitido = "222.555.333-01"
let CPFDoUsuario = "222.555.333-01"
let ehBloqueado = CPFDoUsuario !== CPFPermitido

console.log("É um usuario invalido? " + ehBloqueado)

// Operador de Maior e menor
let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima

console.log(idadePermitidaValida)

let idadeDeCorte = 50
let idadeUsuario = 45
let resultadoEhTerceiraIdade = idadeDeCorte < idadeUsuario

console.log(resultadoEhTerceiraIdade)

let idadeDeCorte = 50
let idadeUsuario = 55
let resultadoEhTerceiraIdade = idadeDeCorte < idadeUsuario

console.log(resultadoEhTerceiraIdade)


___________________________________________________________________________
// OPERADORES LÓGICOS

// AND ( && )
let idade = 18
let vistoVerificado = false
let resultado =  (idade >= 18) && (vistoVerificado === true) 
console.log(resultado)

// AND ( && ) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let item = "estrela"
let resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)

// NOT  ( !) - nega uma afirmação
let tempo = "chuva"
let resultado = tempo === "chuva"
console.log(!!resultado)

// NOT  ( !) - nega uma afirmação
let tempo = "chuva"
let horario = 8
let resultado = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)
