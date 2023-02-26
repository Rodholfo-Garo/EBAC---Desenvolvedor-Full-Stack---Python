programa {
    inclua biblioteca Util --> u
    funcao inicio() {
        inteiro cont = 0, tamanhoLista
	    /*Vamos criar uma lista com 100 nomes*/
	    cadeia nomes[10], resposta
	
	    /*Criei este trecho para preencher a lista com nome vazio.*/
	    para(inteiro i = 0; i < 10; i++){
	        nomes[i] = "vazio"
	    }
	    
	    escreva("Deseja preencher a lista de nomes? Se SIM, digite (S), se NÃO, digite (N): ")
	    leia(resposta)
	    enquanto((resposta == "s")ou(resposta == "S")){
	        escreva("Vamos começar. Digite o nome: \n")
	        leia(nomes[cont])
	        cont = cont + 1
	        escreva("Deseja continuar o preenchimento da lista de nomes? Se SIM, digite (S), se NÃO, digite (N): ")
	        leia(resposta)
	    }
	    
	    tamanhoLista = u.numero_elementos(nomes)
	    escreva("Fim da lista. Você possui ", tamanhoLista," são eles:\n" )
	    para(inteiro i = 0; i < 100; i++){
	        escreva(nomes[i], "\n")
	    }
	    
	    
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 170; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */