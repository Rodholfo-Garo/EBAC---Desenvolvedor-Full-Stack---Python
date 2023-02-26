programa {
	funcao inicio() {
	    
	    inteiro numTab, termo, contador
	    
	    numTab = 0
	    termo = 0
	    contador = 1
	    
	    escreva("Ola, vamos fazer uma conta? \n")
	    escreva("Digite um numero para inciar:  \n")
	    leia(numTab)
        escreva("O numero que vc digitou é ", numTab, "! \n")
        
        enquanto(contador <= 10){
            termo = termo + numTab
            escreva("O termo ", contador, " x ", numTab, " = ", termo, "\n")
            contador = contador + 1
        }
	}
}
