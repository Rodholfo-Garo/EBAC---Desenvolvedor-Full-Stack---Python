$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const enderecoNovaImg=$('#endereco-img-nova').val();
        const inserirImg=$('<li style="display:none"> </li>');

        $(`<img src="${enderecoNovaImg}"/>`).appendTo(inserirImg);

        $(`<div class="overlay-img-link">
                <a href="${enderecoNovaImg}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div`).appendTo(inserirImg)

        $(inserirImg).appendTo('ul');

        $(inserirImg).fadeIn(2000);

        $('#endereco-img-nova').val("");


    })

})