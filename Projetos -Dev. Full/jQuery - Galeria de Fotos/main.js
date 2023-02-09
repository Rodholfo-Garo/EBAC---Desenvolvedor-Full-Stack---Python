$(document).ready(function(){
     //Adicionar Evento no jQuery - 1 - Selecionando o elemento
    $('header button').click(function(){
        $('form').slideDown();//é uma função que da o efeito de um slide fechando
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();//é uma função que da o efeito de um slide abrindo
    })




    //Adicionar Evento no jQuery - 2 - Através da função On
    $('form').on('submit', function(e){
       
        e.preventDefault();

        const enderecoDanovaImagem = $('#endereco-img-nova').val(); //Recupera o valor do input
        const novoItem=$('<li style="display:none"></li>');//Inserir elemento no HTML

        $(`<img src="${enderecoDanovaImagem}"/>`).appendTo(novoItem);//Criar elemento HTML e o appendTo adiciona o elemento na li, vai pegar o novo elemento e inserir entre os li.
        $(`
            <div class="overlay-img-link">
                <a href="${enderecoDanovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            
            `).appendTo(novoItem);

        //Adicionar item ao ul do HTML
        $(novoItem).appendTo('ul');

        //Aplicar animação, colocar none na li
        $(novoItem).fadeIn(5000);

        //Limpar Formulario após adicionar imagem
        $('#endereco-img-nova').val('');

        

    })


})
