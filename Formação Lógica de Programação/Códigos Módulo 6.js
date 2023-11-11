//JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados
let name = "Flávia"
let age = 28
let products = ["Mouse 2xwm", "Teclado Mecânico", "Monitor"]
let productsValues = [29.90, 129.99, 899,99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age){
	console.log("O comprador é: " + name)
   	console.log("A idade é: " + age)
    console.log("-----------------")
    console.log("O Produto é: " + products[0])
   	console.log("O Valor do Produto é: " + productsValues[0])
  }

// transformando o código acima e JSON
 
let invoice = {
	name: "Flávia",
 	age: 28,
	products: {
    	0:["Mouse 2xwm", 29.90],
        1:["Teclado Mecânico", 129.99],
        2:["Monitor", 899.99]
    } 
}
  
console.log(invoice)
  
// para trazer só o nome
console.log(invoice.name)
  
// para trazer só o produto
console.log(invoice.product)


// AGRUPANDO
 
let invoice = {
	name: "Flávia",
 	age: 28,
	products: {
    	0:["Mouse 2xwm", 29.90],
        1:["Teclado Mecânico", 129.99],
        2:["Monitor", 899.99]
   }
} 
  
// para fazer a Função

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(`O comprador é ${invoice.name}`)
   	console.log(`A idade é ${invoice.age}`)
    console.log("----------------")
    
    for(let index in invoice.products){
    	let [productName, productPrice] = invoice.products[index]
      	console.log(`- ${productName}:  R$ ${productPrice}`)
 	}
}

// Classes e Objetos com JSON

class formaDeBolo{
	constructor(saborDaMassa, saborRecheio){
    	this.saborDaMassa = saborDaMassa
    	this.saborRecheio = saborRecheio
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")

console.log(boloFesta)

// Médotos e Propriedades com JSON
class formaDeBolo{
	constructor(saborDaMassa, saborRecheio){
    	this.saborDaMassa = saborDaMassa
    	this.saborRecheio = saborRecheio
    }
    
    escrever(){
    	console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.escrever()
boloPremium.escrever()

