// A função Veiculo é uma classe. 'marca' e 'modelo' são parâmetros do construtor.
function Veiculo(marca, modelo){
    // 'marca' e 'modelo' são atributos da classe Veiculo.
    this.marca = marca;
    this.modelo = modelo;
    // 'detalhes' é um método da classe Veiculo.
    this.detalhes = function(){
        return this.marca + " " + this.modelo;
    }

}
// A função Carro é uma classe que herda de Veiculo. 'marca', 'modelo' e 'numeroDePortas' são parâmetros do construtor.
function Carro(marca, modelo, numeroDePortas){

    // 'numeroDePortas' é um atributo da classe Carro.
    this.numeroDePortas = numeroDePortas;

      // Aqui estamos chamando o construtor da classe Veiculo. Isso é chamado de herança.
    Veiculo.call(this, marca, modelo);
 // Aqui estamos sobrescrevendo o método 'detalhes' da classe Veiculo. Isso é um exemplo de polimorfismo.
    this.detalhes = function(){

        return this.marca + " " + this.modelo + ", " + this.numeroDePortas + " portas";

    }
    
}
// A função Moto é uma classe que herda de Veiculo. 'marca' e 'modelo' são parâmetros do construtor.
function Moto(marca, modelo){
 // Chamando o construtor da classe Veiculo. Isso é chamado de herança.
    Veiculo.call(this, marca, modelo);

      // Sobrescrevendo o método 'detalhes' da classe Veiculo. Isso é um exemplo de polimorfismo.
    this.detalhes = function(){
        return this.marca + " " + this.modelo + ", moto";
    }
}

// Criando instâncias das classes Carro e Moto.
const veiculo1 = new Carro("Ford", "Ka", 2);
const moto1 = new Moto("Honda", "CG-150");
const veiculo2 = new Carro("FIAT", "Toro", 4);

console.log(veiculo1.detalhes());
console.log(moto1.detalhes());
console.log(veiculo2.detalhes());