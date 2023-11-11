// Classificador de Nível do Herói

// Constantes (Níveis)
const NivelUm = "Ferro"
const NivelDois = "Bronze"
const NivelTres = "Prata"
const NivelQuatro = "Ouro"
const NivelCinco = "Platina"
const NivelSeis = "Ascendente"
const NivelSete = "Imortal"
const NivelOito = "Radiante"

// Variáveis (Dados de entrada)
let nomeHeroi = ["Flávia", "Denis", "Maria", "João", "Rute", "Reginaldo", "Tifany", "Samuel"]
let xpHeroi = [500, 1500, 2500, 6500, 7500, 8500, 9500, 10500]
let nivelHeroi = [" ", " ", " ", " ", " ", " ", " ", " "]

// Laço de repetição
for(let i = 0; i < nomeHeroi.length; i++){
    
    let nome = nomeHeroi[i]
    let xp = xpHeroi[i]
    let nivel = nivelHeroi[i]

// Inicio

    if (xp < 1000){
     	nivel = NivelUm

    } else if (xp >= 1001 && xp <= 2000){
    	nivel = NivelDois

    } else if (xp >= 2001 && xp <= 5000){
    	nivel = NivelTres

    } else if (xp >= 6001 && xp <= 7000){
      	nivel = NivelQuatro

    } else if (xp >= 7001 && xp <= 8000){
    	nivel = NivelCinco

    } else if (xp >= 8001 && xp <= 9000){
     	 nivel = NivelSeis

    } else if (xp >= 9001 && xp <= 10000){
    	  nivel = NivelSete

    } else {
     	nivel = NivelOito
    }
 
// Saída 
 console.log("O Herói/Heroína " + nome + " está no nível " + nivel)
 }
