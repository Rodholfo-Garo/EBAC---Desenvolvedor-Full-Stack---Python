$(document).ready(function(){
    $('.caixa-img').slick({
        autoplay: true,
        arrows:false
    });

    $('.menu-hamburguer').click(function(){
        $('.menu').slideToggle()
    })
})