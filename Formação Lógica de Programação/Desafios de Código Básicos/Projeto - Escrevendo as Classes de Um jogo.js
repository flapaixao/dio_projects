class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar(){
        const ataques = {
        mago: "magia",
        guerreiro: "espada",
        monge: "artes marciais",
        ninja: "shuriken",
    };
    
        const ataque = ataques[this.tipo];
        
        console.log(`O ${this.tipo} atacou  ${ataque}`);
   }
}
            
const Heroi1 = new Heroi("Flavia", 28, "monge")
Heroi1.atacar();
