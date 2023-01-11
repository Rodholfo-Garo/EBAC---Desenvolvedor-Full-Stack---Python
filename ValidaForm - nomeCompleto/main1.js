let form = document.getElementById('form-deposito');

/*Tirar reload e conferir nome completo */

//----------Retorna true ou false-------------


function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length>=2;
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-benefi');
    const numeroDaConta = document.getElementById('num-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroDaConta.value}`

//Como a função retorna um true ou false, podemos passar ela dentro de um IF
    if (!validaNome(nomeBeneficiario.value)){
        alert(mensagemSucesso);

        nomeBeneficiario.value = "";
        numeroDaConta.value = "";
        valorDeposito.value = "";

    }else{
        alert("O nome não esta completo")
    }
})

console.log(form);


