//Definido um array de objetos

const alunos = [
    {nome: 'Alice', nota: 8},
    {nome: 'Rodrigo', nota: 5},
    {nome: 'Rodholfo', nota: 7},
    {nome: 'Diana', nota: 9},
    {nome: 'Eva', nota: 4}
];

//Função para filtrar alunos aprovados

function alunosAprovados(arrayDeAlunos){
     return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

function alunosReprovados(arrayDeAlunos){
    return arrayDeAlunos.filter(aluno => aluno.nota < 6)
}

//Chamama função passando o array de alunos  como argumento
const aprovados = alunosAprovados(alunos);

const reprovados = alunosReprovados(alunos);

console.log("Alunos Aprovados: ", aprovados);
console.log("Alunos Reprovados: ", reprovados)