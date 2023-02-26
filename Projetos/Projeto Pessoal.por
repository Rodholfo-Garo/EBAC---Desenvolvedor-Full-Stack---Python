programa
{/*criar uma cadeia de caracteres em forma de lista, vamos alimentar um vetor com alguns nomes e gerar uma lista como resposta*/
	funcao inicio()
	{
		inteiro cont = 0, tamLista
		cadeia nome[3], deci, verificado

		escreva("\nVocê pode inserir até 3 nomes em sua lista, deseja começar?\nSe sim, aperte 'S', para não, 'N'.")
		leia(deci)

		verificado = confOpcao(deci)

		escreva(verificado)

		enquanto(verificado == "erro"){
			escreva("Tente novamente")
			leia(deci)			
		}

		
	}
	funcao cadeia confOpcao(cadeia deci){
		se((deci == "s")ou(deci == "S")){
			escreva("Bacana, insira o nome: ")
			leia(nome[cont])
		}
		senao se((deci == "n")ou(deci == "N")){
			escreva("Que pena, paramos por aqui")
		}
		senao{
			deci = "erro"
		}

		retorne deci
		
	}

}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 630; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */