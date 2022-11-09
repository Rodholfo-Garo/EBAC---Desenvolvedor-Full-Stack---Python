#Atalhos VSCODE

- CTRL + D - Seleciona TAGS iguais para fazer as mudança
- CTRL + ESPAÇO = Dentro das aspas do atributo, ele mostra as opções.



# Introdução ao desenvolvimento Front-End

O HTML (Hiper Text Markup Language) é uma linguagem de marcação de texto, ela é a estrutura básica de um sistema WEB. Em 2014 foi lançado o HTML5, que trouxe mais vantagens em seu uso para WEB, como a possibilidade de desenhar componentes gráficos , como caixas, círculos, texto e imagens com o uso do elemento <canvas>. O HTML trabalha em conjunto como CSS (CASCATING STYLE SHEET), que aplica estilo ao documento HTML. Através do CSS, definimos a aparência da página, sua adaptação a diversos tipos de tela (site responsivo). Com o CSS3 conseguimos aplicar  animações, transições e efeitos que antes  eram possíveis apenas com uso de  imagens.
O Java Script é uma linguagem programação de alto nível, responsável por deixar as paginas dinâmicas e interativas. Foi criado em 1995 por Brendan Eich. Esta linguagem pode ser usada tanto no Front-End quanto no Back-end. Os navegadores interpretam o código  JavaScript anexado às páginas HTML.  Seu uso vai além das páginas Web,  podendo ser usado no Back-end,  desenvolvimento mobile, IOT e games.

# Versionamento de código usando o GIT

## Tópicos Fundamentais para entender o funcionamento do GIT

   * SHA1 - A sigla significa Secure Hash Algorithm (Algoritmo de Hash Seguro), é um conjnto de funções hash criptográficas projetadas pela NSA( Agencia de Segurança nacional dos EUA) A encriptação gera conjunto de characteres identificador de 40 dígitos.

## Objetos internos do GIT

Objetos responsáveis pelo versionamento do nosso código:
   - BLOBS - Bloco básico de composição - só guarda o SHA1 do arquivo
   - TREES - Armazenam e apontam os Blobs - Guarda a estrutura e  onde estão localizados os arquivos, podem apontar para outras TREE
   - COMMITS - É o objeto que vai juntar tudo, que vai dar sentido a alteração que esta sendo feita.

## Ciclo de vida

- Untracked - Arquivos que o Git não sabe de sua existência, acabado de criar ( antes de dar o comando git add) depois deste comando ele vai p git e começa o versionamento (vai para Staged)
  Dentro de Tracked (arquivos rastreáveis pelo GIT) se divide em 3 estágios :

- Unmodified - arquivo não modificado dentro do repositório do GIT ( antes do comando git init) quando ele for alterado, o GIT muda ele automaticamente para Modified. Se ele for removido, ele volta para Untracked.

- Modified - arquivo modificado, se rodar o GIT ADD nele novamente, ele vai para Staged

- Staged - Ficam os arquivos que estão se preparando para fazer parte de outro tipo de agrupamento. Se der um commit nele, ele volta para Unmodified.

## Ambiente de desenvolvimento

- Working Directory - arquivo Untracked, ou seja, o git não tem o conhecimento dele, e vc da um git add, ele é movido para Staged e para a area de Staging Area, os arquivos ficam transitando entre a working Directory e a área de Staging. 

- Staging Area - após o comando git add os Arquivos se tornam Modified e Staged, apos o comando do commit -m, eles vão para nosso repositório local,

- Local Repository - Quando fazemos o commit na Staging Area, os arquivos são movidos para nosso repositório local, ele sera composto apenas por commits, caso contrario vc não consegue mover para o repositório remoto.



## Staged

Uma das principais funções do Git são os conceitos de Staging Environment e o Commit.

Enquanto você está trabalhando, você pode adicionar, editar e remover arquivos. Mas sempre que você atingir um marco ou terminar uma parte do trabalho, você deve adicionar os arquivos a um ambiente de preparação.

Na **STAGED AREA** ficam os arquivos que estão prontos para serem **COMMITADOS** no repositório em que você está trabalhando.

## Commits

Uma das principais funções do Git são os conceitos de Staging Environment e o Commit.

Enquanto você está trabalhando, você pode adicionar, editar e remover arquivos. Mas sempre que você atingir um marco ou terminar uma parte do trabalho, você deve adicionar os arquivos a um ambiente de preparação.

**Arquivos** preparados são arquivos que estão prontos para serem **confirmados** no repositório em que você está trabalhando

Fazer um commit:

`git commit -m` - O -m inserir a menssagem 

Para adicionar o arquivo ao staged e commitalo em um unico comendo sem a necessidade de dar um git add:

`git commit -am "Menssaegem da Atualização"`

### ChangeLog

O propósito de um commit é documentar a etapa na evolução do código fonte. Alguns projetos limpam os commits, outros não.

O propósito de uma entrada de changelog é documentar as diferenças notáveis, muitas vezes de múltiplos commits, para comunicar de forma clara os usuários.

Um *changelog* é um arquivo que contém uma lista selecionada, ordenada cronologicamente, de mudanças significativas para cada versão de um projeto. Por que manter ...

### Como fazer um bom changelog?

#### Princípios fundamentais

- Changelogs são *para humanos*, não máquinas.
- Deve haver uma entrada para cada versão.
- Alterações do mesmo tipo devem ser agrupadas.
- Versões e seções devem ser vinculáveis (com links).
- A versão mais recente vem em primeiro lugar.
- A data de lançamento de cada versão é exibida.
- Mencione se você segue o [versionamento semântico](https://semver.org/).

#### Tipos de mudanças

- `Added/Adicionado` para novos recursos.
- `Changed/Modificado` para alterações em recursos existentes.
- `Deprecated/Obsoleto` para recursos que serão removidos nas próximas versões.
- `Removed/Removido` para recursos removidos nesta versão.
- `Fixed/Corrigido` para qualquer correção de bug.
- `Security/Segurança` em caso de vulnerabilidades.

###  Padrões de nomenclaturas para mensagens em commits

1. Chore - pequena tarefa. `git commit -m "chore: removendo arquivo.txt"`
2. Fix - correções. `git commit -m "fix: correção no cálculo d médias"`
3. Feat - inclusão de funcionalidades. `git commit -m "feat: inclusão de função para calcular mediana"`
4. Docs - atualização de documentação.  `git commitk -m "docs: atualizando o changelog.md"`

## Log

Log são registro dos commits feitos. 

1. Visualizando o registro de commits realizados -  O comando `git log ` mostra o histórico de commits realizados. Cada commit é composto por identificador, autor, e-mail do autor, data do commit e a menssagem passada no `git commit -m`. O comando `git log -n 2 (ou outro numero)` mostra os 2 ultimos commits. Para visualizar uma versão resumida do  registro de commits: `git log --one line`

2. Variações na visualização de commits - É possível combinar as variações, solicitamos o  conteúdo de dois registros com apenas o  identificador do commit: `git log --stat –n 2 --oneline`

Para visualizar o histórikco do Git através do VSCODE, temos que instalar a extensão *Git History*

## Histórico

Para voltar alguns commmits com o git - Primeiro veja os logs de forma resumida com `git commit --oneline`. para Voltar o projeto, ou navegar nos commits, usar o comando `git checkout (passar como paramentro o ID do commit)`

Para reverter comits no GIT (fazer uma reversão), usar ` git revert HEAD (mais ID do commit que vc quer reverter)`

## Branches

Com o Git podemos criar versões  paralelas do nosso projeto, fazemos isso  no Git através da criação de branches,  que pode ser traduzido como galhos,  ramificação, então pensamos em nosso  repositório como uma árvore que pode  possuir diversos galhos. Com essa funcionalidade podemos fazer  experimentos e trabalhar em equipe de  uma forma organizada.

### Listando as branches do  repositório

Para visualizar todas as branchs que  fazem parte do repositório, execute o  comando: `git branch`

### Criando uma branch

Para criar uma branch, executamos o  comando: git branch nova_branch Com esse comando será criada uma  nova ramificação do projeto a partir do  estado da branch atual, com uma  variação do comando podemos indicar  uma branch de referência para a sua  criação: `git branch nova_branch branch_referencia`

### Convenções para nomear branches

No dia a dia seguimos um padrão para a  nomenclatura de branches, o que nos  facilita a identificação de seu conteúdo hotfix/nome_do_bug: usado para correções  rápidas, exemplo: o botão de adicionar ao  carrinho não funciona, a correção desse bug será  feita numa branch hotfix. bugfix/nome_do_bug: correção de um bug que  não é um impeditivo ao usuário, não compromete  um fluxo do site. feature/nome_da_funcionalidade: a adição de  uma funcionalidade será contida nessa nova  branch, até que ela esteja desenvolvida e  validada, exemplo: `feature/add_to_favorites`.

### Navegando entre branches

Para trocar de branch usamos o  comando: git checkout nome_branch Podemos combinar a criação com a troca  de branch com o comando: git checkout –b nome_branch A branch nova será criada e nosso  repositório estará baseado nela.

### Deletando uma branch

Para deletar uma branch, executamos o  comando: git branch –D nome_branch

## Merge

### Mesclando branches

Para mesclar duas branches, trazendo as  atualizações feitas em uma para a outra,  executamos o comando: git merge nome_branch

## Conflitos entre branches 

Apesar do Git ser uma ótima ferramenta  para o trabalho em equipe, ele não pode  impedir que duas pessoas alterem o  mesmo arquivo. Imagine que o arquivo teste.html foi  alterado na branch X e na branch Y, no  momento em que o merge for realizado o  Git criará um conflito, pois ele não sabe  qual versão considerar, esse conflito  deverá ser resolvido de forma manual.



# Treino Git



## GIT - Via Terminal - CONFIGURAR CONTA NO TERMINAL

* listar configurações do GIT
  *  git config --list
* Limpar e-mail cadastrado
  * git config --global --unset user.e-mail
* Limpar nome cadastrado
  * git confg --global --unset user.name 

* Conferir se foi Limpo

  * git config --list

* Configurar nome e e-mail

  * git config --global user.name "nome"
  * git config --global user.email "email"

  Sem estas informações vc não faz um commit, ele vai pedir que vc se identifique.



## Transitar entre STAGED e UNTRECKED

* Criar um diretorio
  	mkdir "nome da pasta"

* Conferir se foi criada
  	ls

* Criar um arquivo
  	echo "conteudo" > nomedoarquivo.txt

* Ver o conteudo dentro do arquivo
  	 - cat "nome do arquivo"

* Deletar o arquivo
  	- rm -r nome do arquivo

* Conferir se ele foi deletado
  	- ls

* Inicializar um repositório
  	- Entrar na pasta criada e digite git init .

* Criar 2 arquivo
  	- echo "conteudo" > nomedoarquivo1.txt
  	 - echo "conteudo" > nomedoarquivo2.txt

* Conferir status do projeto
  	- git status

* Adicionar arquivo ao Staged
  	- git add nomedoarquivo1.txt

* Conferir um staged e o outro em Untracked
  * git status

* Remover do stage
  	- git rm --cached "nome do arquivo"

* Conferir se os 2 estão Untracked, não fazem parte do staged
  	* git status

* Adicionar todos os arquivos no staged de uma vez
  	* git add .

* Salvar no repositório dizendo que incluimos os arquivos
  	* git commit -m "Obs. da alteração"

* Modificar o arquivo para ele voltar para Staged
  	* echo "conteudo alterado" > nomedoarquivo1.txt

* Adicionar o arquivo ao staged e comitar tudo em um unico comando
  	* git commit -am "Obs. da alteração2"



 ----------------- GIT - Via VSCODE

* Com o VSCODE aberto, abrir o projeto
  	- File
  	- Open Folder
  	- Ir até a pasta com os arquivos criados
  	- Criar um arquivo novo, o changelog.md

* Abri o terminal no VSCODE
	- Apertar F1 e digitar New Terminal, e creat a new terminal
	- No terminal, digitar git status, ele vai mostrar que o chagenlog.md ainda não foi adicionado ao Staged

* Adicionar o arquivo ao Staged
  	- No VSCODE, ir até o icone do GIT, colocar o mouse sobre o arquivo e cklicar no sinal de +.

* Conferir no terminal se o arquivo mudou para area de staged
  	- git status

* Para fazer o commit no VSCODE
  	- Na guia do GIT no VSCODE, ir até a caixa de mensagem aberta na parte superior e digitar a "OBS. da alteração feita", isso faz o q o -m faz, e clicar no check, isso faz o commit.

* Visualizar o arquivo changedlog.md em MarkDown no VSCODE
  	- Apertar F1 e digitar MarkeDonw: Open Preview

* Escrever os tipos de nomenclaturas usadas quando fazemos a mensagem do commit
	- chore = pequena tarefa
		git commit -m "chore: removendo arquivo.txt"

	- fix = correções
		git commit -m "fix: correçõa no calculo de medias"

	- feat = inclusão de funcionalidades
		git commit -m "feat: inclusão de função para calcular mediana"

	- docs = atualização do documento
		git commit -m "docs: atualizando o changelog.md"

----------------- GIT - Via Terminal - LOG

* Visualizar registros de commits realizados
	- Abrir a pasta criada pelo PowerShell
	- Ver Historico de commit criado
		git log

* Visalizar variações
	- git log -n 2 (mostra os 2 ultimos commits)
	- git log --oneline (traz um resumo)

* Visulaizar o conteudo que foi alterado
	- git log --stad (mostra o log com os arquivos que foram modificados)

*Podemos unir os comandos
	- git log -n 3 --oneline

 ----------------- GIT - Via VSCODE - LOG

* Instalar a extensão no VSCODE
  	- Git History

* Selecionar o arquivo clicando 2 vezes nele e apertar F1, digitar Git View History e clicar nela
	- Ela vai apresentar a mesma visão dos commits, porém de uma forma mais amigavel

----------------- GIT - Via Terminal - HISTORICO

* Conferir se tem algo removido em Staged
	- git status

* Caso positivo, desfazer isso
  	- git restore nome_do_arquivo.txt

* Criar novo arquivo
  	- acho "conteudo" > novo_arquivo.txt

* Commitar adição
  	- git add .
  	- git commit -m "descrição"
  	

* Mudar conteudo do arquivo criado
  * echo "conteudo 2" > novo_arquivo.txt
* Conferir se houve modificação no staged
  	- git status

* Desfazer modificação do arquivo
  	* git checkout novo_arquivo

* Conferir se o arquivo saiu do staged
  	* git status

* Conferir se o conteudo voltou
  	* cat novo_arquivo.txt -> tem que aparecer o conteudo antigo,

* Conferir os commits feitos

  * git log --oneline

    

    

    ---------------- GIT - Via Terminal - VOLTAR COMMIT

* Conferir os logs
  * git log --oneline

* Voltar o commit
  	- git checkout parametro_id_do_commmit (esta na tela do git log --oneline, texto amarelo)
  O git checkout, além de desfazer alguma alteração temporária, de conteúdo, o git checkout serve para navegar entre os commits.

* Conferir se houve a alteração na pasta
   - ls

     

----------------- GIT - Via Terminal - Branches

Obs: Quando criamos uma nova branch, o git se baseia na atual, e ela herda a modificação feita na branch

* Listar as Branches
	- git branch
* Alternar entre branchs
	- git checkout nome_da_branch ( ele muda para esta brench)

O git checkout serve para desfazer mudanças em arqivos que ainda não foram commitados ou adicionados ao Staged e tambem serve para navegação entre commits e branchs.

* Criar uma branch
	-  git branch nome_da_branch

* Conferir se a branch foi criada
	- git branch

* Criar um arquivo na branch nova
	- echo "conteudo" > nome_do_arquivo.txt

* Adicionar arquivo ao Staged
	- git add .

* Commitar 
	- git commit -m "descrição"

* trocar de branch ao mesmo tempo que cria ela
	- git checkout -b nome_da_branch

* Criar uma branch apontando como referencia a branch atual
  	- git branch nome_da_branch_nova nome_da_branch_referencia

* Deletar branch
  	* git branch -b nome_branch

----------------- GIT - Via Terminal - Merge

* Criar uma branch seguindo os principios de nomenclatura e que ja mude para nova
  	* git checkout -b feature/new_file

* Criar um arquivo
	- echo "conteudo do arquivo"  nome_do_arquivo.txt

*Commitar a alteração

	- git add . (Adiciona tudo no repositório)
		- git commit -m add new file"

* Voltar para a branch principal
	- git checkout master

* Pegar o conteudo da branch criada para a master
  	- git marge nome_da_branch

* Visualizar o conteúdo transferido para a branch master
  	- cat nome_do_arquivo

----------------- GIT - Via VSCODE- Merge (Conflito entre 2 programadores)

* Abrir o VSCODE pelo terminal na pasta atual
	- code .

*Criar um arquivo conflito.txt
*Inserir um conteudo
*Commitar o arquivo no VSCODE - "add conflito.txt"
*Criar uma branch chamada branch_a
*Editar o conteudo do arquivo chamado conflito.txt
*Commitar este arquivo
*Voltar para a branch master
*Criar outra branch chamada de branch_b
*Fazer uma alteração diferente no arquivo conflito.txt
*Commitar alteração
*Voltar para a Branch Master
*Para mesclar as branch no VSCODE, aperte F1 e digite Git Merge Branch
*Selecione a branch que vai fazer o marge com a master (branch_a)
*Fazer o marge da branch_b

O arquivo vai ficar vermelho, indicando que há um conflito, escolha qual mudança vc vai querer aceitar.

*Salvar o arquivo e commitar a modificação



# HTML

## Introdução ao HTML



## Inserir Texto

- Para Inserir Titulos

````html
<h1>Titulo Importante</h1>
<h2>Segundo Titulo</h2>
<h3>Terceiro Titulo</h3>
<h4>Quarto Titulo</h4>
<h5>Quinto Titulo</h5>
<h6>Sexto Titulo</h6>
````

- Para inserir Texto

  ````htm
  <p> Paragrafo aqui </p>
  ````

- Inserir Link - Ale´m de enviar para outras paginas, podemos direcionar para um telefone, email

  ````html
  //Link para o Site//
  <a href="https://google.com" title="Ir para o site do google">Ir para o Google</a>
  
  //Ligação//
  <a href="tel:11999999999" title="ligar">entre em contato</a>
  
  //Envio de e-mail//
  <a href="mailto:ro.garo87@gmail.com" title="enviar email">Envie um e-mail agora</a>
  
  //Link para outras paginas do documento HTML//
  <a href="./ nome.html">Descrição do Botão</a>
  
  
  ````

- Deixar negrito

  ````html
  <b>Negrito</b> //Tag Visual//
  
  <strong>Negrito</strong> //Tag semantica, indica que o conteudo é importante
  ````

- Deixar Italico

  ````html
  <i>Italico</i> //Tag Visual//
  
  <em>Italico</em> // Tag Semantica, indica conteudo enfatisado//
  ````

- Grifar o texto

  ````html
  <mark>TExto</mark>
  ````

- Riscar a palavra

  ````html
  <small>Deixar a palavra com uma fonte menor</small>
  ````

- Tag Span - Usada quando vamos fazer uma edição via CSS ou JS

- Inserir Citações

  ````html
  <blockqote> TExto citado</blockqote>
  ````

- Tag para usar quando temos um endereço fisico em nosso site

  ````html
  <address>rua teste, n 123, - CEP 123456</address>
  ````

  

## Conteiners

O Principal Container são as DIVS, ela pode conter qualquer tipo de conteúdo e isso é um problema pq ela não tem  semântica porém ainda é muito utilizada para alteração no JS ou CSS.

No HTML 5 entraram containers mais semanticos:

	- Header - Cabeçalho
	- Nav - Tag Menu
	- Footer - Tag Rodapé
	- Barra lateral - Tag Aside
	- Conteudo Principal - Tag Main
	- Seções - Tag Section
	- Artigos - Tag Article

## Listas

Existem 2 tipos de lista, as ordenadas `<ol>` e não ordenadas `<ul>` , eles são containers e tem uma mudança semântica para o leitor de tela, e os itens da lista são adicionados através da tag `<li>`

## Tabelas

O container de Tabelas é a Tag `<table>` 

````html
<table> //Container de tabela//
    <caption>Notas em Matematica</caption> // Legenda da tabela//
    <thead> //Cabeçalho da Tabela//
        <tr>  //Linha da tabela//
            <th>Nome do Aluno</th>//Coluna do Cabeçalho//
            <th>Nota do Aluno</th>//Coluna do Cabeçalho//
        </tr>
    </thead>
    <tbody> //Corpo da tabela, registros// As Colunas dentro do <tbody> usamos a tag <td>
        <tr>
            <td>Aluno A</td> //Corresponde aos <th></th> Criados anteriormente, na mesma sequencia//
            <td>8</td>
            <td>Aluno B</td>
            <td>7</td>
        </tr>
    </tbody>
    <tfoot> //Rodapé da Tabela//
        <tr>
            <td>Média</td>
            <td>7.5</td>
        </tr>
    </tfoot>
</table>
````



## Formulario

Para inserir um formlario:



````html
<form> //Container para o formulario, dentro dela, criamos os campos do Formulario
    <input type="text" placeholder="Seu nome"/>
    <br />
    <label for="emailteste">Seu E-mail</label> //Etiqueta, ele tem um comportamento legal 
    <input id="emailteste" type="email" />
    <br />
    <input type="tel" placeholder = "Seu telefone" /> // No celular abre o teclado apenas com os numeros, Usabilidade//
    <br />
    <input type="number" max="10" min="2" step="2"/>
    <input type="file" /> // Anexar arquivos
    <input type="color" /> Abre caixa de seleção de cores
    <input type="checkbox" id="checkbox-termos"/> <label for="checkbox"> Aceito os termos</label>
	
    //Campos para pesquisa//
    
    <p>Qual sua cor favorita?</p> //para selecionar apenas uma opção, usar o atributo <name>//
    
    <input type="radio" name="cor-favorita" id="cor-vermelha"/><label for="cor-vermelha">Vermelho</label>
    <input type="radio" name="cor-favorita" id="cor-verde"/><label for="cor-verde">Verde</label>
    <input type="radio" name="cor-favorita" id="cor-azul"/><label for="cor-azul">Azul</label>
    
    //Campos para pesquisa 2//
    <label> Q!ual seu filme favorito?</label>
    <select multiple>
        <option>Filme A</option>
    	<option>Filme B</option>
   		<option>Filme C</option>        
    </select>
    
    // Inserir Texto
    <textarea></textarea>
    
    //Inserir Botão
    
    <button type="submit">Enviar</button> // envia informações do formulario//
    <button type="reset">Limpar</button> //Limpar o Formulario//	
</form>
````



## Tags de Midia

Para Inserir Midia:

````html
//Para inserirmidia na pagina//
-src - caminho para imagem
-alt - texto alterntivo usado por leitores de tela Google é chamado de webcrowler - Web crawler, bot ou web spider é um algoritmo usado pelos buscadores para encontrar, ler e indexar páginas de um site.
-controls - Propriedada para controlar o elemento

//Adiciona imagem//
<img src="./midia.jpg" alt="uma abelha numa flor amarela"/>

//Adiciona audio//
<audio controls src="./arquivo.mp3>"</audio>

//Adiciona Video//

<video controls src="./video.mp4"></video>

//Inserir idia direto da internet//
<img src="www.endereço.com.br" alt="midia da internet"/>


````





