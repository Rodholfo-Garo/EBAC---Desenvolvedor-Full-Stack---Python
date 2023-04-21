# Introdução à Programação

## Conceitos

Os pilares do pensamento computacional compõem tudo oq há de mais importante para tomadas de decisões.

Entendemos como pilar 4 grandes ideias que ajudam a estruturar soluções:

1. Decomposição - Destrinchar um problema em vários pequenos problemas.

2. Reconhecimento de padrões - Entender o problema como um todo. Permite a economia de energia e recursos, com a sistematização de passos e tarefas repetidas.

3. Abstração - Retirar o q não é relevante. Decidimos oque pode ser ignorado.

4. Algoritmo - Ordenar o passo a passo.

 # O que é Lógica de Programação e Pensamento Computacional? Aplicações e estruturas de soluções.







Variaveis

Sempre temos que zerar elas quando criadas.

O nome da variavel não ´pde começar com numero, caracter, e nem ter um nome reservado.



# Comandos de Entradas e Saídas

*  O Código tem que ser identado - significa que vamos começar a passar para o programa algumas informações.

* 

1. Pseudocódigo - É uma sequência de instruções com estas palavras reservadas.
2. Fluxogramas - (https://app.diagrams.net/) 

# Operadores Lógicos e Relacionais

*** Quando for montar um Fluxo grama, usar o losango (na estrutura que tem o sim ou o não, por exemplo)

Operadores Relacionas vai relacionar as grandezas e os operadores lógicos vvai construir a partir destas relações valores verdadeiros ou falsos.

Eles só podem apresentar respostas como verdadeiras ou falsa, eles podem ser comparadas entre si e servem tb para relacionar  grandezas do mesmo tipo, por exemplo, inteiros, reais......

1. Relacionais eles apresentam relação entre os tipos de dados, são eles:

|  >   |    maior que     |
| :--: | :--------------: |
|  <   |    menor que     |
|  >=  | maior ou igual a |
|  <=  | menor ou igual a |
|  !=  |   diferente de   |
|  ==  |     igual a      |

2. Operador Lógico são 3

   * E (and) - Todas as opções devem ser verdadeiras para retornar verdadeiro

     | Evento 1 | Evento 2 | Retorno |
     | -------- | -------- | ------- |
     | v        | v        | v       |
     | v        | f        | f       |
     | f        | v        | f       |
     | f        | f        | f       |

     

   * OU (or) - se apenas uma das opção for verdadeira, ele retorna verdadeiro

     | Evento 1 | Evento 2 | Retorno |
     | -------- | -------- | ------- |
     | v        | v        | v       |
     | v        | f        | v       |
     | f        | v        | v       |
     | f        | f        | f       |

     

   * NÃO (not) - inverte os valores. Se a resposta for verdadeiro, ele retorna falso

## Exercícios

````javas
Criar um jogo de par ou ímpar contra o computador.

programa{
	inclua biblioteca Util --> u
	funcao Inicio(){
	
	inteiro num, numComp, soma, resto
	caracter parImpar
	
	escreva("Este é um jogo de Par ou Ímpar contra o computador. \n")
	escreva("Se você deseja ímpar, digite(I). Se deseja par, digite(P).\n")
	leia(parImpar)
	
	se(parImpar == 'I'){
		escreva("Boa sorte! Você digitou um numero ímpar! \n")	
	}
	senao se(parImpar =='P'){
		escreva("Boa sorte! Você digitou um número par \n")
	}
	senao{
		escreva("Recomece! Você digitou uma opção invalida! Verifique se digitou corretamente. Use maiúsculas. \n")
	}
	
	escreva("Escolha um valor de 1 a 5! \n")
	leia(num)
	
	se(num <= 5){
	numComp = u.sorteia(1,5)
	escreva("O computador jogou: ", numComp, ".\n")
	soma = num + numComp
	resto = soma % 2
	se((resto == 0)e (parImpar == 'P')){
		escreva("Você jogou par, com o valor: ", num, " o computador jogou ímpar, com o valor: ", numComp, ". Você venceu! \nA soma foi ", soma, ".\n")
	}
	sena se ((resto == 1)e(parImpar == 'I')){
		escreva("Você jougu ímpar, com o valor: ", num, " o computador jogou par, com o valor: ", numComp, ". Você venceu" \n A soma foi ", soma, ".\n")
	}
	senao{
		escreva("Você perdeu!")
	}
	}
}


````



# Estruturas Condicionais

Este tipo de estrutura serve basicamente para vc diferenciar ou separar trexos do código em que vc tem que repetir determinados procedimentos.



* Se -> Então -> Senão
* if -> Then -> Else

1. Estrutura Condicional Simples

````javascript
se(condição)Então - estrutura lógica - 
	(instrução)
FimSe

** Se vc tem uma condição que é satisfeita, o comando é executado
````

2. Estrutura Condicional Composta

````javascript
se(condição)Então - estrutura lógica - 
	(instrução)
senão(condição)Então
	(instrução)
FimSe
````

3. Estrutura Condicional Encadeada

````javas
se(condição)Então - estrutura lógica - 
	(instrução)
senão se (condição)Então
	(instrução)
senão - Não tem condição
	(instrução)
FimSe
````



## Exercício

````javascript
Usando relações condicionais, construa m programa que classifica programas de TV por idade declarada:

programa{
    funcao inicio(){
        real idade
        
        escreva("Antes de avançarmos, por favor, digite sua idade: ")
        leia(idade)
        escreva("Voce possui ", idade, " anos!")
/* A principal ideia deste tipo de programa é voce construir o encadeamento*/
    
    se(idade < 10 ){
        escreva("\n Você ainda é uma criança, veja programas com classificação : (L).\n")
    }
        senao se((10 <= idade)e(idade <12)){
            escreva("\n Você ainda é uma criança, mas já pode ver programas com classificação: (10)! \n")
        }
        senao se((12 <= idade)e(idade < 14)){
            escreva("\n Olá adolescente! Você jo podem ver programas com classificação: (12)!\n")
        }
    
    }
````



# Estrutura de Repetição

São estruturas que permitem que vc escreva uma parte do código que dará uma condição para repetição e executa de alguma maneira os comandos necessários para fazer uma determinada tarefa sem ter que copiar este trecho do código.

2 principais comandos:

* Enquanto (while) - Precisa de um contador externo e a condição esta no começo da estrutura

````javas
Enquanto (Condição Verdadeira) Então
	(Instruções)
FimEnquanto

Ex.
programa {
	funcao inicio() {
		inteiro valor1, contador = 1
		
		escreva("Digite o valor: "\n)
		leia(valor1)

		enquanto(contador <= valor1){
			escreva(contador, "\n")
			contador = contador++ /*incremento*/
		
		}
	}
}

````

* Para (for) - Ela não precisa de um contador externo .Vc não tem que ficar declarando as variais fora do escopo

````
Para (contador, valor de parada, forma de contagem) então
	(INSTRUÇÂO)
FimPara

Ex.
programa {
	funcao inicio() {
		inteiro valor1
		
		escreva("Digite o valor: \n")
		leia(valor1)
		
		para(inteiro x = 10; x >= valor1; x--){
		    escreva(x, " - ")
		}
	}
}
````

* contador - Valor inicial
* valor de parada - condição (Ex. <= 10)
* incremento ou decremento (++ ou --)

Toda a estrutura de repetição requer um controle para evitar do computador ficar rodando infinitamente, para isso, não podemos esquecer quais são as condições iniciais, quais são as condições de parada e controle do incremento.

````Javascr
Exercicio:

Escreva um programa que verifica  quantos múltiplos o numero informado possui.

programa {
	funcao inicio() {
		inteiro numeroTeste, resto, contaMultiplos = 0
		
		escreva("Olá! Digite um número para sabermos quantos múltiplos ele possui: ")
		leia(numeroTeste)
		
		para(inteiro i = 1; i <= numeroTeste; i++){
		    resto = numeroTeste % i
		    se(resto == 0){
		        contaMultiplos = contaMultiplos + 1
		    }
		}
		
		escreva("O número digitado possui ", contaMultiplos, " múltiplos!")
	}
}




````

```javascript
programa
{
	funcao inicio(){
		real nota[4]
		escreva("Digite as notas de cada bimenstre do ano letivo. Use ponto no lugar de virgula. \n")

		/**loop para receber as 4 notas*/
		para(inteiro i = 0; i<4; i++){
			escreva("\nInsira a nota: ")
			leia(nota[i])
		}
				
		/*Loop para mostrar as notas e o index na tela*/

		para(inteiro i = 0; i<4; i++){
			escreva("A nota na posição ", i, " é ", nota[i], ".\n")
			
		}
	}
}
```



# Rotinas e Funções



Toda a linguagem de progração ja tem um conjunto de funções pronta, este conjunto é chamado de biblioteca.

Para representar uma  parte do código, podemos atribuir um procedimento ou uma função. A principal ideia é tornar o código um pouco mais curto fazendo o uso de uma estrutura ja pronta,

Rotinas (Procedimentos) - Obrigatoriamente executam um conjunto de passos e comandos sem dar um retorno. A resposta final é sempre dada de forma externa.

````Javas
Exemplo:
programa
{
		funcao inicio()
{
		real num1, num2

		escreva("Digite o valor \n")
		leia(num1)

		escreva("Digite o segundo valor \n")
		leia(num2)

		somador(num1, num2)

	}
		/*Declaração do Procedimento - Externa ao programa principal*/
	funcao somador(real a, real b){
		real c = a + b
		escreva("A soma é ", c, ".\n")
	}
}


A resposta aparecer na tela não significa que podemos usar ela.
````



Função - As funções são parecidas com os procedimentos, mas, obrigatoriamente, vem apresentar um retorno. Estas respostas podem ser ultilizadas. A função tem que ter o tipo de retorno que ela da.

Você vai pegar o procedimento e acrescentar um comando chamado *Retorne*. retorna é tornar possivel aquilo que vc usa em um programa, vc permite que a função pricipal ( inicio), pegue o valor do q esta na função e use em qualquer outro treixo do código.

````javascript
funcao real somador(real a, real b){
		real c = a + b
		escreva("A soma é ", c, ".\n")
    retorne c
````



Biblioteca - podem ou não, retornar valores. São funçoes que estão prontas.



````Javas
Exercicio

Criar um programa que verifica se um triangulo é retangulo com uso de funções.

vai receber 3 valores, um sera chamado de hipotenusa e os outros de catetos

A soma do quadrado do cateto é igual ao quadrado da hipotenusa 


pegar uma variavel levar ao quadrado e compara com a soma dos outros dois quadrados


programa
{
	
inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		real hip, cat1, cat2, teste

		escreva("Vamos verirficar se os valores informados formam um triangulo retangulo. \n")
		escreva("Informe o primeiro valor. \n")
		leia(hip)
		escreva("Informe o segundo valor. \n")
		leia(cat1)
		escreva("Informe o terceiro valor. \n")
		leia(cat2)

		hip = mat.potencia(hip, 2)
		
		cat1 = mat.potencia(cat1, 2)
		
		cat2 = mat.potencia(cat2, 2)
		
		se(cat1 + cat2 == hip){
			escreva("Os valores informados formar um triangulo retangulo. \n")
			
			}
		senao{
				escreva("Os valores informados não formam um triangulo retangulo")
		}

		
}

````

`````J
programa {
    
	funcao inicio() {
		real hip, cat1, cat2, teste
		
		escreva("Vamos verificar se o triângulo apresentado é triângulo retângulo.\n")
		escreva("Digite o valor do maior lado: \n")
		leia(hip)
		escreva("Digite o valor do segundo lado: \n")
		leia(cat1)
		escreva("Digite o valor do terceiro lado: \n")
		leia(cat2)
		
		se((hip > cat1)e(hip > cat2)){
		    escreva("Você digitou valores adequados!\n")
		    teste = somaQuadrado(cat1,cat2)
		    se((hip*hip) == teste){
		        escreva("O triângulo apresentado é um triângulo retângulo!\n")
		    }
		    senao{
		       escreva("O triângulo apresentado não é um triângulo retângulo!\n") 
		    }
		}
		senao{
		    escreva("Você digitou valores em ordem inadequada! Por favor, comece novamente!")
		}
	}
	
	
	/*Aqui está um exemplo de criação de função para o cálculo de uma parte do problema! Pensamento Computacional: dividir em pequenas soluções!*/
	funcao real somaQuadrado(real b, real c){
        real quadrado
        quadrado = (b*b) + (c*c)
        retorne quadrado
    }
}
`````



#  Caracteres e Cadeias de Caracteres

para declara caractere

Um texto ou ma palavra é sempre declarado como cadeia e caractere como caractere no Portugol.

Toda cadeia, ou palavra, devem estar entre aspas duplas"".

No caracter entre aspas simples '$'.

Uma cadeia de caractere pode ser chamada de STRING

A declaração do caractere é feita sempre em aspas simples e a declaraçaõ das cadeias de caracteres(texto) entre aspas dupla

Elas devem ser feitas no escopo do programa principal, no caso do protugol, o programa principal é a funçao inicio, se elas forem declaradas fora do programa principal, deve-se considerar que elas estão fora do programa principal e portanto serão usadas dentro do contexto que vc escolheu ou função.

É possível concatenar as cadeias de caracteres usando o operador aritmético + .



````javascript
programa {
	funcao inicio() {
		cadeia nome1, ultimoSobrenome1, nomeCompleto1, nome2, ultimoSobrenome2, nomeCompleto2
		
		escreva("Olá! Vamos verificar o seu registro! Por favor digite seu primeiro nome: \n")
		escreva("Digite seu primeiro nome em letras minúsculas.\n")
		leia(nome1)
		escreva("Digite seu último sobrenome em letras minúsculas.\n")
		leia(ultimoSobrenome1)
		nomeCompleto1 = nome1 + ultimoSobrenome1
		
		escreva("Por favor, vamos repetir a operação.\n")
		
		escreva("Digite seu primeiro nome em letras minúsculas.\n")
		leia(nome2)
		escreva("Digite seu último sobrenome em letras minúsculas.\n")
		leia(ultimoSobrenome2)
		nomeCompleto2 = nome2 + ultimoSobrenome2
		
		se(nomeCompleto1 == nomeCompleto2){
		    escreva("Você digitou corretamente. Muito obrigado!")
		}
		senao{
		    enquanto(nomeCompleto1 != nomeCompleto2){
		        escreva("Você digitou nomes diferentes, por favor, vamos repetir a operação.\n")
		
		        escreva("Digite seu primeiro nome em letras minúsculas.\n")
		        leia(nome2)
	        	escreva("Digite seu último sobrenome em letras minúsculas.\n")
	    	    leia(ultimoSobrenome2)
		        nomeCompleto2 = nome2 + ultimoSobrenome2
		    }
	    escreva("Você digitou corretamente. Muito obrigado!")
		}
	}
}
````



# Vetores e Matrizes



São 2 tipos de array. A grande diferença é que no vetor nós temos uma dimensão, então vamos ter um dado como endereço para cada um dos componentes do vetor, ja a Matriz pode ter duas ou mais dimensões.

* Array 
  - Vetor - array de um dimensão.
  - Matriz - array de duas ou mais dimensões.



## Vetores

Vetores são um conjunto de dados de um mesmo tipo armazenados no mesmo endereço ( conjunto de dados)

O vetor é uma forma de armazenamento de dados do mesmo tipo, sem a necessidade de declararmos mais de uma vez, este armazenamento reservar um espaço na memoria do computador.

Ordena o armazenamento em um unico espaço da memória do computador.

Declarar um vetor é paracido com a declaração de uma variavel, porém, inserimos um colchete na frente do nome informando com a quantidade de valor(index) que iremos armazenar, ou não

Ex.

`inteiro nota[4]` - Armazena 4 notas, se o espaço estivesse em branco, e ai vc declara depois.

Ex.

`inteiro nota[] = {2, 3, 45, 9, 81, 74, 23}` 

Para acessar os dados armazenados dentro do vetor, chamamos ele pelo numero do index.

`escreva ("O valor armazenado na posição 2 é: ", nota[2],". \n")`

ele vai mostrar 45

Podemos criar uma variavel e atribuir o valor condido no Vetor a ela chamando pelo index.

Uma das vantagens do uso de Vetores é que vc declara apenas um vez e alimenta quantos dados forem necessarios, em contra partida, para a variável, em cada declaração vc teria que alimentar m valor.

````Javascr
programa
{
	
inclua biblioteca Util --> ut
	funcao inicio()
	{
		inteiro nota[] = {2, 10, 15, 23, 79, 99, 5}, tamanhoVetor

		tamanhoVetor = ut.numero_elementos(nota)

		escreva("O tamanho do vetor é: ", tamanhoVetor, " .\n")

		escreva("O valor armazenado na posição 2 é: ", nota[2], " . \n")

		para(inteiro i = 0; i < 7; i++){
			escreva("\n", nota[i], "\n")
		}
		
	}
}

````

````javascript
programa
{
	funcao inicio()	{
		real nota[4]
		escreva("Digite as notas de cada bimenstre do ano letivo. Use ponto no lugar de virgula. \n")

		/**loop para receber as 4 notas no vetor*/
		
		para(inteiro i = 0; i<4 ; i++){
			escreva("Insira a nota")
			leia(nota[i])
		}
				
		/*Loop para mostrar as notas e o index do vetor na tela*/
		para(inteiro i = 0; i<4; i++){
			escreva("A nota na posição ", i, " é ", nota[i],".\n")
		}
	}
}
````

Montar uma tabela com Vetor

````javascript
programa
{
	
	funcao inicio(){
		cadeia nome[] = {"João", "Maria", "José"}
		real tempo[] = {12.5, 25.0, 40.0}
		inteiro numFilho[] = {5, 2, 6}
		caracter fuma[] = {'S', 'N', 'S'}

		/*Titulo da Tabela*/
		escreva("\n||NOME\t\t||HORAS TRABALHADAS\t\t||NUM. DE FILHOS\t\t||FUMANTE\n")
		
		/*Loop para preencher a tabela*/
		para(inteiro i = 0; i<3; i++){
			escreva("\n", nome[i],"\t\t", tempo[i],"\t\t", numFilho[i], "\t\t", fuma[i] )
		}
	}
}

````



## Matriz

Toda a representação deve levar em consideração o tipo de dado a ser armazenado, ou seja, cada declaração pode armazenar somente dados do mesmo tipo. A  Matriz pode ter duas ou mais dimensões.

* Armazena um conjunto de iformação sempre do mesmo tipo
* É possível fazer operações isoladas com seus valores.
* Assim como os Vetores os índices começam com ZERO.

A matriz é declarada com 2 pares de colchetes:

`matriz[][]`

````javascript
programa
{
	
	funcao inicio()
	{
		inteiro nota[3][3] /*matriz com 3 linhas e 3 colunas*/
		escreva("Digite os valores da matriz.\n")

		/*Valores de entrada*/
		para(inteiro i=0; i< 3; i++)/*Preenche a linha*/{ 
			para( inteiro j = 0; j <3; j++)/*Preenche a coluna*/{
				escreva("\n pro favor, digite um valor: ")
				leia(nota[i][j])
			}		
		}
		
		/*monta a tabela com os valores*/
		para(inteiro x = 0; x<3; x++){
			para(inteiro y = 0; y<3; y++){
				escreva("[",nota[x][y],"]")
			}
			escreva("\n")/*Iprime 3 caracter em cada linha, formando uma tabel*/
		}		
	}
}

````















