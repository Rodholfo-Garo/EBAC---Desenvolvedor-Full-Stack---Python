$(document).ready(function(){
     //Adicionar Evento no jQuery - 1 - Selecionando o elemento
    $('header button').click(function(){
        $('form').slideDown();//é uma função
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    //Adicionar Evento no jQuery - 2 - Através da função On
    $('form').on('submit', function(e){
       
        e.preventDefault();

        const enderecoDanovaImagem = $('#endereco-img-nova').val();
        const novoItem=$('<li style="display:none"></li>');
        $(`<img src="${enderecoDanovaImagem}"/>`).appendTo(novoItem);
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
        $(novoItem).fadeIn(1000);

        //Limpar Formulario após adicionar imagem
        $('#endereco-img-nova').val('');

        

    })


})
