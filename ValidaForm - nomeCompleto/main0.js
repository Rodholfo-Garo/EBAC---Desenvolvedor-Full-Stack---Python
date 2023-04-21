/* //*** Recuperar atributos de Elementos e Setar seus valores
let nomeBene = document.getElementById('nome-benefi');

//Para os inputs temos um atributo chamando .value. Ale´m de retornar um valor, ele inseri um valor no campo selecionado. Para escrever o valor em m campo, colocamos nomedavariavel.value = 'valor que vc quer'

nomeBene.value = 'Rodholfo de'

//colocando o nome da variavel e " . " temos acesso a outros atributos do imput, uma lista de opção de recuperação, como o placeholder, type, id, required ...Isso no Dev.Tools.

nomeBene.type

//*** Recuperar o Campo valor

let valorDepo = document.getElementById('valor-deposito')

//Nos campos do tipo number, tem uma validação que o navegador ja inclui. ELe não aceita texto.

*** Validação customizadas. Exemplo, no campo nome, exigir nome completo

//Separa a string com base no caracter, como o espaço, e transforma em arrays.
nomeBene.value.split(' ')

//Contar o tamanho do array
nomeBene.value.split(' ').length > 3

//Condicionar a habilitação do botão com a validação

document.getElementById('btn-depositar').disabled = nomeBene.value.split(' ').length < 3 

Se le = Caso o nome seje menor q 3, o botão vai estar desablitado
*/

//---------EVENTOS---------------

/* Remover o comportamento do formulario de recarregar a tela, tem que alterar o evento de submição do formulario */
const form = document.getElementById('form-deposito');
const nomeBenefi = document.getElementById('nome-benefi');

//Criando a funçao que tem o papel de validar se o nome é completo

function validaNome(nomeCompleto){
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.length >=2;
}

//para remover o reload do formulario temos que adicionar um parametro na função, este parametro é o EVENTO representado pela letra e)
//addEvent adciona ouvintes para eventos do nosso elementos

form.addEventListener('submit', function(e){

    //Variavel para ver se o formulario é valido ou não//
    let formValido = false; //Diz se o formulario é valido ou não
    e.preventDefault(); //esta função cancela a ação padrão do submit

    
    const numeroContaBeneficiario = document.getElementById('num-conta');
    const valorDeposito = document.getElementById('valor-deposito');

    //Colocar a TAG HTML para deixar os parametros em negrito
    const mensagemSucesso = `Montante de:<b>${valorDeposito.value}</b> depositado para p cliente: <b>${nomeBenefi.value}</b>- conta <b>${numeroContaBeneficiario.value}</b>`;

    formValido = validaNome(nomeBenefi.value)
    //vai retornar um true ou falce
    //mensagem de sucesso, o atributo inerhtml tras o conteudo HTML
    if (formValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        document.querySelector('.success-message').innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block',

            // Limpar os campos depois que o formulario for submetido no caso de sucesso
            nomeBenefi.value = '';
            numeroContaBeneficiario.value = '';
            valorDeposito.value = '';

    } else{
        nomeBenefi.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = block;
    }
})

nomeBenefi.addEventListener('change', function(e)){
    console.log(e);
}