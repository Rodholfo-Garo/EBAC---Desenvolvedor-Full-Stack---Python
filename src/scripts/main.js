
    function insert(num){
        /* Inserir numeros */
        var numero = document.getElementById('resultado').innerHTML;
        /* Concatena numeros */
        document.getElementById('resultado').innerHTML=numero+num;
    }
    
    /* Limpa Tela */
    function clean(){
        document.getElementById('resultado').innerHTML="";
    }
    
    /* Apaga Numeros */
    function back(){
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
    
    function calcular(){
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
        else{
            document.getElementById('resultado').innerHTML="0"
        }
    }
