// Inicio
console.log("Calculadora de Partida Rankeadas");

// funções
function calcularSaldo(vitorias, derrotas){
	return vitorias - derrotas;
}  
  
 function calcularNivel(saldo){
 	switch (true){
    case saldo <= 10:
      return "Ferro";

    case saldo > 11 && saldo <= 20:
      return "Bronze"; 

    case saldo > 21 && saldo <= 50:
      return "Ferro";  

    case saldo > 51 && saldo <= 80:
      return "Ouro";

    case saldo > 81 && saldo <= 90:
      return "Diamante";

    case saldo > 91 && saldo <= 100:
      return "Lendário";

    case saldo > 101:
      return "Imortal";
   }
 }
       
let saldo = calcularSaldo(300, 20);
let nivel = calcularNivel(saldo);

console.log("O Herói tem saldo de " + saldo + " e esta no nível " + nivel)
