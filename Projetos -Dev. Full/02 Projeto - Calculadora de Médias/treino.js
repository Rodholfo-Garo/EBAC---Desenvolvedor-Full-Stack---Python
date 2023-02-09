const form=document.getElementById('form-atividade');

const nomeAtividade=document.getElementById('nomeAtividade');
const notaAtividade=document.getElementById('notaAtividade');

const imgAprovado='<img src="./img/aprovado.png" alt="Emoji Feliz"/>';
const imgRepovado='<img src="./img/reprovado.png" alt="Emoji triste"/>';

const arrayAtividade=[];
const arrayNotas=[];

let linhas='';


form.addEventListener('submit', function(e){
e.preventDefault();

criarLinha();
inserirLinha();
atualizaMediaFinal();

})



function criarLinha(){

    arrayAtividade.push(nomeAtividade.value);
    arrayNotas.push(parseFloat(notaAtividade.value));


    let linha='<tr>';
    linha+=`<td>${nomeAtividade.value}</td>`;
    linha+=`<td>${notaAtividade.value}</td>`;
    linha+=`<td>${notaAtividade.value >=7 ? imgAprovado : imgRepovado }</td>`;
    linha+='</tr>';

    linhas+=linha;

    nomeAtividade.value='';
    notaAtividade.value='';
}

function inserirLinha(){
    const corpoDatabela=document.querySelector('tbody');
    corpoDatabela.innerHTML=linhas;
}

function atualizaMediaFinal(){
    let somaDasNotas=0;

    for(let i=0 ; i < arrayNotas.length; i++){
        somaDasNotas+=arrayNotas[i];
    }
    console.log(somaDasNotas);
}