$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true /*faz o slide mudar sozinho*/
    });

    /*Mostrar e Ocultar o menu*/
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
    
    /*Chamar Plugin MaskPlugin*/
    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'Seu melhor numero'
    })
    /*Chamar plugin Validate*/
    $('form').validate({
        /*chamar o name dos campos*/
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        /*Editar mensagem de erro para cada campo*/
        messages:{
            nome:'Por favor, insira o seu nome'
        },

        /*INterceptar o evento de submit e dispara função caso o formulario esta invalido*/

        submitHandler: function(form){
            console.log(form)
        },

        invalidHandler:function(evento, validador){
            let campoIncorretos =validador.numberOfInvalids();              
            if(campoIncorretos){
                alert(`Existem ${campoIncorretos} campos incorretos`)
            }

        }
    })

    /*Animar formulario*/

    /*Faz a pagina rolar até a area de contato*/
    $('.lista-veiculos button').click(function(){
        const destino=$('#contato');
        $('html').animate({
            scrollTop:destino.offset().top
        }, 1000)

        const nomeVeiculo=$(this).parent().find('h3').text();
        $('#Veiculo-interesse').val(nomeVeiculo);

        
    })
})