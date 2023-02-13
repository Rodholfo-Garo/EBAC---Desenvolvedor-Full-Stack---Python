const form=document.getElementById('form-deposito');

const nomeBeneficiario=document.getElementById('nome-benefi');
let formValido=false

function validaNome(nomeCompleto){
    const nomeComoArray=nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault(e)
    
    const numeroContaBeneficiario=document.getElementById('num-conta');
    const valorDeposito=document.getElementById('valor-deposito');

    const mensagemSucesso=`O montante de ${valorDeposito.value}, foi depositado para o cliente ${nomeBeneficiario.value.toUpperCase()} - conta${numeroContaBeneficiario.value}`;

    formValido=validaNome(nomeBeneficiario.value)

    if(formValido){
        const containerMensagemSucesso=document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML=mensagemSucesso
        containerMensagemSucesso.style.display='block';
    }else{
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
    nomeBeneficiario.value="";
    numeroContaBeneficiario.value="";
    valorDeposito.value="";
})

nomeBeneficiario.addEventListener('keyup', function(e){

    
    formValido=validaNome(e.target.value);

    if(!formValido){
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-message').style.display='block'
    }else{
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-message').style.display='none'
    }
})
