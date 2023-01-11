const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.length>=2;
}

form.addEventListener('submit', function(e){
    e.preventDefault(e);

    const nomeBeneficiario = document.getElementById('nome-benefi');
    const numeroDaConta = document.getElementById('num-conta');
    const valorDeposito=document.getElementById('valor-deposito');

    const mensagemSucesso=`o montante ${valorDeposito.value} foi depositado para o cliente ${nomeBeneficiario.value} - conta ${valorDeposito.value}`

    
    if(validaNome(nomeBeneficiario.value)){
        alert(mensagemSucesso);
    }else{
        alert("nomeIncompleto");
    }


})