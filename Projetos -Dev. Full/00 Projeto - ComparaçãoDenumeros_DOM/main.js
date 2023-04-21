const form = document.getElementById('submit-form')

const inputNumeroA=document.getElementById('NumeroA');
const inputNumeroB=document.getElementById('NumeroB');

const mensagemSucesso= `Parabéns, o valor de A é menor que B, sendo A - ${inputNumeroA.value} e B - ${inputNumeroB.value} `

function validaForm(n1, n2){
    if(inputNumeroA.valueAsNumber < inputNumeroB.valueAsNumber){
        validacao = true;
    }else{
        validacao = false;
    }
    return validacao
}


form.addEventListener('submit', function(e){
    e.preventDefault()

    formValido=validaForm(inputNumeroA, inputNumeroB);

    if(formValido){
        alert(mensagemSucesso)
    }else{
        alert('A maior que B')
    }




})