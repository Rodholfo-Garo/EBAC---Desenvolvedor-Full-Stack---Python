const caixasImagens=document.querySelectorAll('.caixa-img');

/*Criar slid */

caixasImagens.forEach(function(caixa){
    const imagens = caixa.querySelectorAll('img')
    let idx=0;

    function carrosel(){
        idx ++;

        /*Quando chegar na ulltima imagem ele volta */
        if(idx > imagens.length -1){
            idx = 0
        }

        caixa.style.transform =`translateX(${-idx * 310}px)`;        
    }
    setInterval(carrosel, 2500);
})

let botoes = document.querySelectorAll('.colors div');

botoes.forEach(function(botao){
    botao.addEventListener('click', function(e){

        botoes.forEach(function(outroBotao){
            outroBotao.classList.remove('selecionado')
        })
        botao.classList.add('selecionado')
    })
})