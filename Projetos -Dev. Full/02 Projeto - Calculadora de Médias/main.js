const form = document.getElementById('form-atividade')

 /*Adicionar emojis */
const imgAprovado = '<img src="./img/aprovado.png" alt="emojis selebrando"/>';
const imgreprovado = '<img src="./img/reprovado.png" alt="emojis decepcionado"/>';

let linhas='';/*Para uma inserção não substituir a outra, tem que ficar no escopo global */

/*Calcular média final*/
const arrayAtividade=[];
const arrayNotas=[];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;

/*Inserir nota de corte */
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

form.addEventListener('submit', function(e) {
    e.preventDefault(); /*Remove Comportamento de Reload do form*/
    
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    /*Capturar Campos nome da Atividade e Nota*/
    const inputNomeAtividade = document.getElementById('nomeAtividade')
    const inputNotaAtividade = document.getElementById('notaAtvidade')

    /*Verifica Atividade repetida */

    if(arrayAtividade.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida!`)
    }else{
        /*Calcular média final*/
    arrayAtividade.push(inputNomeAtividade.value);
    arrayNotas.push(parseFloat(inputNotaAtividade.value));/*Converte String em numero*/

    /*Adicionar uma linha no corpo da tabela */
    let linha = '<tr>';/*Recebe código HTML como uma STRING */
    linha += `<td> ${inputNomeAtividade.value}</td>`;/*É o mesmo que concatenar */
    linha +=`<td> ${inputNotaAtividade.value}</td>`;
    linha +=`<td> ${inputNotaAtividade.value >=notaMinima ? imgAprovado : imgreprovado}</td>`;
    linha +='</tr>';    

    /*Adicionar o Conteudo dentro do corpo da tabela */
    linhas += linha;        
    }
    /*Limpar o Campo após enviado */
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){

    const corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML=linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    
    /*toFixed serve para deixar a media com 2 casas decimais */
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;  
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i= 0 ; i < arrayNotas.length; i++){
        somaDasNotas += arrayNotas[i];
    }

    return somaDasNotas/arrayNotas.length;

}