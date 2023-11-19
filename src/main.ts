function multiplicar (x:number, y:number):number{
    return x*y
}

function saudacao(nome:string): string{
    return `Olá ${nome}`
}

const resultado = multiplicar(5, 3);
const mensagem = saudacao('Rodholfo')

console.log(resultado);
console.log(mensagem);