const form=document.getElementById('form-deposito');
const nomeBeneficiario=document.getElementById('nome-benefi');

formValido=false;


function validaNome(nomeCompleto){
    const nomeComoArray= nomeCompleto.split(' ');
    return nomeComoArray.length>=2;
}

form.addEventListener ('submit', function(e){
    e.preventDefault();
    
    const numeroDaConta=document.getElementById('num-conta');
    const valorDeposito=document.getElementById('valor-deposito');
    
    const mensagemDeErro=`O nome <b>${nomeBeneficiario.value}</b> não é valido, por favor conferir.`
    const mensagemSucesso=`Montante de:<b>${valorDeposito.value}</b> depositado para p cliente: <b>${nomeBeneficiario.value}</b>- conta <b>${numeroDaConta.value}</b>`;

    formValido=validaNome(nomeBeneficiario.value)

if(formValido){
    const containerMensagemSucesso=document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML=mensagemSucesso;
    containerMensagemSucesso.style.display='block';
}else{
    const containerMensagemErro=document.querySelector('.error-message');
    containerMensagemErro.innerHTML=mensagemDeErro;
    containerMensagemErro.style.display='block';
}
})

nomeBeneficiario.addEventListener('keyup', function(e){
    formValido=validaNome(e.target.value);

    if(!formValido){
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display='block';
    }else{
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display='none';
    }
})