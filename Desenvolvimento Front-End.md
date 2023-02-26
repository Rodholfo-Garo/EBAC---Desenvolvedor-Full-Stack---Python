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

No dia a dia seguimos um padrão para a  nomenclatura de branches, o que nos  facilita a identificação de seu conteúdo 

* hotfix/nome_do_bug: usado para correções  rápidas, exemplo: o botão de adicionar ao  carrinho não funciona, a correção desse bug será  feita numa branch hotfix. 
* bugfix/nome_do_bug: correção de um bug que  não é um impeditivo ao usuário, não compromete  um fluxo do site.
*  feature/nome_da_funcionalidade: a adição de  uma funcionalidade será contida nessa nova  branch, até que ela esteja desenvolvida e  validada, exemplo: `feature/add_to_favorites`.

### Navegando entre branches

Para trocar de branch usamos o  comando: git checkout nome_branch Podemos combinar a criação com a troca  de branch com o comando: git checkout –b nome_branch A branch nova será criada e nosso  repositório estará baseado nela.

### Deletando uma branch

Para deletar uma branch, executamos o  comando: git branch –D nome_branch

## Merge

### Mesclando branches

Para mesclar duas branches, trazendo as  atualizações feitas em uma para a outra,  executamos o comando: git merge nome_branch

## Conflitos entre branches 

Apesar do Git ser uma ótima ferramenta  para o trabalho em equipe, ele não pode  impedir que duas pessoas alterem o  mesmo arquivo. Imagine que o arquivo teste.html foi  alterado na branch X e na branch Y, no  momento em que o merge for realizado o  Git criará um conflito, pois ele não sabe  qual versão considerar, esse conflito  deverá ser resolvido de forma manual.

# Pratica GIT - Via Terminal

### Configurar nome e usuário:

```javascript
git config --list // Lista as configurações do git
git config --global --unset user.name // Limpa o nome, se usar user.email, limpa o email
git config --list //Lista as configurações
git config --global user.email "seu e-mail do github" // Inserir o email, para nome use ser.name 

```



### Transitar entre Staged e Untracked

```javascript
mkdir "nome da pasta" //Criar um Diretório
ls // Conferir se foi criado
echo "Conteudo" > nomedoarquivo.txt //Cria um arquivo
cat nomedoarquivo.txt // Ver conteudo dentro do arquivo
rm -r nomedoarquivo.txt //Remove arquivo
ls //Conferir se foi deletado
git init //Inicia um repositório no diretprio criado
echo "conteudo" > nomedoarquivo1.txt //Criar Arquivo 1
echo "conteudo" > nomedoarquivo2.txt //Criar Arquivo 2
git status //Conferir Status do projeto
git add nomedoarquivo1.txt //Adiciona arq. ao Staged
git status //Motras arq. 1 em Staged e arq.2 em Untrecked
git rm --cached nomedoarquivo1.txt // Remove do staged
git status //Mostra os 2 arq em Untracked
git add. //Adicionar todos os arquivos no staged de uma vez
git commit -m "Obs. Alteração" //Salva no repositório dizendo que incluimos os arq.
echo "Conteudo Alterado" > nomedoarquivo1.txt //Modificar o arq.1 para ele voltar para Staged
git commmit -am "Obs. Alteração 2" // Adiciona ao Staged e Commita no mesmo comando
```

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

### Ver Registro de Commit (LOG)

```javascript
git log //Visualizar registros de commits realizados
git log -n 2 //Mostra os doi ultomos commits
git log --oneline //Motra resumo do Histórico
git log --stad // Mostra o log com os arquivos que foram modificados
git log -n 3 --oneline // Mostra resumo dos 3 ultimos commits
```



--------------- GIT - Via VSCODE - LOG

* Instalar a extensão no VSCODE
	- Git History

* Selecionar o arquivo clicando 2 vezes nele e apertar F1, digitar Git View History e clicar nela
	- Ela vai apresentar a mesma visão dos commits, porém de uma forma mais amigavel

### Conferir Históricos 

```javascript
git status // Conferir Status do Projeto
echo "conteudo" >arq1.txt // Criar arquivo
git add arq1.txt // Adiciona ao Staged
git rm --cached arq1.txt // Remove do Staged e volta para Untracked
git commit -m "Obs. alteração" // Commitar arquivo
echo "conteudo alterado" > arq1.txt //Alterar conteudo
git status // Conferir Alteração
git checkout arq1.txt // Desfaz a alteração do arquivo e tira do Staged
git status // Conferir se saiu do Staged
cat arq1.txt // COnferir se conteudo antigo voltou
git log --oneline // COnferir commits feitos
git checkout parametro_id_do_commmit // Volta o commit

```

### Branches

Obs: Quando criamos uma nova branch, o git se baseia na atual, e ela herda a modificação feita na Branch

Para cria uma branch sem histórico

* ```css
  git checkout --orphan
  ```

### Convenções para nomear branches

No dia a dia seguimos um padrão para a  nomenclatura de branches, o que nos  facilita a identificação de seu conteúdo 

* hotfix/nome_do_bug: usado para correções  rápidas, exemplo: o botão de adicionar ao  carrinho não funciona, a correção desse bug será  feita numa branch hotfix. 
* bugfix/nome_do_bug: correção de um bug que  não é um impeditivo ao usuário, não compromete  um fluxo do site.
*  feature/nome_da_funcionalidade: a adição de  uma funcionalidade será contida nessa nova  branch, até que ela esteja desenvolvida e  validada, exemplo: `feature/add_to_favorites`.

````javascript
git branch //Listar Branch
git branch novaBranch // Criar Branch
git branch //Conferir se foi criada
echo "conteudo">arq1.txt //Criar arquivo na Branch
git add arq1.txt //Adiciona ao Staged
git commit -am "Obs. alteração" // Commitar
git checkout -b outra_branch //Trocar de branch ao mesmo tempo que cria
git branch nova_branch2 outra_branch // Cria branch apontando como referencia a atual
git branch -D outra_branch // Deletar branch

````

O git checkout serve para desfazer mudanças em arqivos que ainda não foram commitados ou adicionados ao Staged e tambem serve para navegação entre commits e branchs.

* git rm --cached nome_do_arquijvo - Serve para deleta arquivos da branch remota

* 


### Merge

* Criar uma branch seguindo os principios de nomenclatura e que ja mude para nova
	- git checkout -b feature/new_file

* Criar um arquivo
	- echo "conteudo do arquivo"  nome_do_arquivo.txt

* Commitar a alteração
	- git add .
		- git commit -m add new file"

* Voltar para a branch principal
	- git checkout master

* Pegar o conteudo da branch criada para a master
	- git marge nome_da_branch

* Vizulizar o conteudo transferido para a branch master
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



# CSS

## Sintaxe do CSS 

* ````css
  Seletor{
  	Propriedade: valor;
  }
  ````

* Sendo respectivamente no exemplo 

* ````html
  h1{color:red;}
  ````
  
  

##  Formas de adicionar estilo no HTML

* inline - Diretamente nas tags, através do atributo style

  * ````html
    <h1 style:"color:red">Texto</h1>
    ````

* na Head HTML - Na head, escrevendo o CSS dentro da tag style

  * ````html
    <head>
        <style>
            h1{color:red;}
        </style>
    </head>
    ````

* Criar um arquivo externo, geralmente chamado de main.css. Para fazer o HTML chamar este arquivo fazemos o link:

  ````html
  <head>
      <link rel="stylesheet" href="./main.css"/>
  </head>
  ````

  

## Seletores

No CSS podemos estilizar os elementos através do nome da tag, do nome da classe ou pelo seu ID. Para adcionar uma classe no elemento HTML usamos o atributo class.

````html
<h1 class=“title”>Olá CSS</h1>
````

### Selecionando Elementos

Para selecionar os elementos que queremos estilizar no CSS , podemos usar os seletores, são eles:

1. Nome da Tag - H1{...}
2. ID da Tag - #meuid
3. Classe da tag - .mihaclasse{}

Podemos selecionar mais de 1 elemento por vez:

````css
.title, .subtitle{...}
````

Navegar entre os elementos:

`````CSS
.header .title {...}
`````

Nesse exemplo estamos estilizando o elemento .title que está dentro do elemento .header

### Pseudo-classes

Podemos estilizar além dos elementos, seu estado, fazemos isso com as pseudoclasses, por exemplo: quando passamos o mouse sobre um link e ele muda de cor, essa mudança é feita através da estilização de pseudo-classes. seletor:estado { ... } Exemplo, quando passar o mouse sobre as tags H1 o texto ficará vermelho: h1:hover { color: red; }

#### Lista das principais pseudo-classes

1. :first-child – para selecionar a primeira ocorrência do elemento 
2. :last-child – para selecionar a última ocorrência do elemento 
3. :hover – para estilizar o elemento quando passarmos o mouse por cima 
4. :focus – para estilizar um elemento quando o foco estiver nele 
5. :checked – para estilizar inputs do tipo checkbox e radio, quando estes estiverem marcados 
6. :required – para estilizar inputs que sejam obrigatórios 
7. :optional – para estilizar inputs que sejam opcionais

## BOX MODEL

Os valores possíveis para a propriedade box-sizing são:

1. content-box: é o valor padrão da propriedade, a largura e altura, incluindo o conteúdo, sem considerar espaçamento e bordas 
2.  border-box: a largura e altura incluindo o conteúdo, espaçamento e bordas 
3.  initial: valor padrão da propriedade 
4.  inherit: o valor propriedade do elemento-pai

A propriedade box-sizing é uma das propriedades que iremos querer atribuir para todas as tags, podemos fazer isso com o seletor *: * { box-sizing: border-box; }

## Display:flex:

Com a propriedade Display, informamos ao navegador como um elementos deve ser exibido.

1. display: none; - COm o valor none o elemento não aparece
2. display: block; - O elemento será exibido como m bloco
3. display: inline; - O elemento será exibido na mesma linha

## Flexbox

O FLEXBOX não é uma propriedade CSS, é um módulo. Para trabalhar com o flexbox temos que ter um container que possua o valor flex. Tornando a DIV em flex, todos os elementos filhos desta tag, tornam-se flex itens.

## Flex Container

É a tag que envolve os itens, será nela que iremos aplicar a propriedade “display: flex”. Transforma todos os seus itens filhos em flex itens.

Propriedades relacionadas: ao Flex Container:

1. display
2. flex-diretion - É a propriedade que estabelece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container.
3. flex-wrap - É a propriedade que define se os itens devem ou não quebrar alinha. Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.
4. flex-flow - É um atalho para as propriedades flex-direction e flex-wrap. Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.
5. justify-content - Essa propriedade vai se encarregar de alinhar os itens dentro do
   container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.
6. align-items - Trata do alinhamento dos flex itens de acordo com o eixo do container. O alinhamento é diferente para quando os itens estão em colunas ou linhas. Permite o alinhamento central no eixo vertical.
7. align-content - É a propriedade responsável por tratar o alinhamento das linhas
   do container em relação ao eixo vertical do container.



1. Flex-direction :É a propriedade que estabelece o eixo principal do container,
   definindo assim a direção que os flex items são colocados no flex
   container.

   ![image-20221128203245024](C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20221128203245024.png)

   1. flex-direction: row - à direção do texto, esquerda para direita

   2. flex-direction: row-reverse - sentido oposto à direção do texto

   3. flex-direction: column - ordenação de cima para baixo, em coluna unica

   4. flex-direction: column-reverse - ordenação inversa, de baixo para cima

      

2. Flex-wrap : É a propriedade que define se os itens devem ou não quebrar a linha. Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.

   ![image-20221128203349925](C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20221128203349925.png)

   	1. flex-wrap: nowrap - É o padrão, não permite quebra de linha
   	1. flex-wrap:

3. Justify Content : Alinha os itens dentro do container, caso seus itens esteja ocupando 100% de todo o container,ela não se aplica, variações:

   1. justify-content: flex-start: início do container.
   2. justify-content: flex-end: final do container.
   3. justify-content: center: ao centro do container.
   4. justify-content: space-between: cria um espaçamento igual entre os
      elementos.
   5. justify-content: space-around: os espaçamentos do meio são duas vezes
      maiores que o inicial e final.

   ​	

## Flex Item

São os elementos filhos diretos do Flex Container. E também podem se tornar Flex Container.

Propriedades Relacionadas:

1. flex-grow - Define a proporcionalidade de crescimentos dos itens,
   respeitando o tamanho de seus conteúdos internos. Não irá funcionar caso tenhamos adicionado justify-content ao nosso flex container
2. flex-basis
3. flex-shrink - É a propriedade que estabelecer a capacidade de redução ou
   compressão do tamanho de um item.
4. flex - Esta propriedade é um atalho ou abreviação de escrita para as
   propriedades: grow, shrink e basis.
5. order
6. align-self - É a propriedade que estabelece o alinhamento de modo individual
   sobre um determinado item.

# Integrando HTML com JavaScript

Para acessar um documento HTML pelo JS, primeiro temos que acessar o objeto document.

Podemos criar uma cadeia de seleção de elementos, podemos capturar o formulario, e selecioknar o botão de dentro do formulario (Paracido como a forma que selecionamos no CSS, colocando a tag, depois o elemento dentro dela.)

Podemos selecionar um ou mais elementos através de alguns critérios: 

1. ID – retorna apenas um elemento: document.getElementById('btn-depositar’) 
2. Classe – retorna todos os elementos que usam a classe: document.getElementsByClassName('container’) 
3. Nome da tag – retorna todos os elementos da tag: document.getElementsByTagName('input’) 
4. Seletores especiais: document.querySelector('input[type=number]’) - Ele retorna sempre a priimeira incidencia, para retornar todos os itens que atendam ao critério da busca document.querySelectorAll('input[type=number]')

Com o comando **window.location.pathname** pegamos tudo o que vem depois do domínio do site. **window.history.back() -** Voltamos para a página anterior.





TReino

Selecionar todo o HTML

- document.body

1. Acessar a Tag input, do HTML - document.getElementByTagName('input') 

   ​			Ele retorna um array com os inputs

2. Nesta recuperação dos Elementos, ele retorna um array comum, o q nos possibilita salvar em uma variavel e acessar seus index

   ````javascript
   let inputs = document.getElementByTagName('input') //Criar variavel
   inputs[1] //acessar index HTML
   ````

3. 

Se Salvar 

## Formularios

Conseguimos atribuir condições para o funcionamento do formulário,

por exemplo:

document.getElementById**('btn-depositar')**.**disabled** = nomeBeneficiario.value.**split**('  ').**length < 3**

*('btn-depositar')** - Botão

**disabled** - É a função (o que vai acontecer)

**split** - Espaçamento para entender que é um nome completo

**length < 3** - Condição



Através do JS podemos recuperar atributos de elementos e tambem podemos setar seus valores

para fazer isso, criamos 1 variavel.

Para recuperar ou atribuir valor a um campo: 

* let beneficiario = document.getElementById(‘nome-beneficiario’) 
* beneficiario value // retorna o valor 
* beneficiario.value = ‘João Silva’ // atribui o valor. 

Podemos acessar os atributos inseridos em um campo através do operador ponto: 

* beneficiario.type // retorna o tipo do campo 
* beneficiario.placeholder // retorna o placeholder atribuído ao campo 
* beneficiario.id // retorna o ID atribuído ao campo

Para habilitar ou desabilitar um botão: let botao = document.getElementById(‘btn-depositar’) botao.disabled = true OU false

## Eventos

Evento é o nome dado a uma ação de determinado elemento, por exemplo: 

* Click: ao clicar em um botão; 
* Submit: ao enviar um formulário;
* Change: ao mudar o conteúdo de um input. 

Para adicionar um evento a um elemento usamos a função addEventListener, que irá estar observando o evento e quando ele for disparado executará nosso código. document.querySelector(‘form’).addEventListener(function() { alert(“O formulário foi enviado”); });

O JS é um código **bloqueante**, por isso colocamos ele por **último,** caso de algum erro ele pode afetar todo seu projeto.

Para adicionar um **evento:**

> **addEventListener (evento, função)** 

Para remover o relod do formulario temos que adicionar um parametro na função, este parametro é o EVENTO representado pela letra e)

form.addEventListener('submit', function(e)



````javascript
/* Remover o comportamento do formulario de recarregar a tela, tem que alterar o evento de submição do formulario */
const form = document.getElementById('form-deposito');

//Criando a funçao que tem o papel de validar se o nome é completo

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >=2;
}

//para remover o relod do formulario temos que adicionar um parametro na função, este parametro é o EVENTO representado pela letra e)

form.addEventListener('submit', function(e){

    //Variavel para ver se o formulario é valido ou não//
    let formValido = false; //Diz se o formulario é valido ou não
    e.preventDefault(); //esta função cancela a ação padrão do submit

    const nomeBenefi = document.getElementById('nome-benefi');
    const numeroContaBeneficiario = document.getElementById('num-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de:${valorDeposito.value} depositado para p cliente: ${nomeBenefi.value} - conta ${numeroContaBeneficiario.value}`;

    formValido = validaNome(nomeBenefi.value)
    if (formValido){//vai retornar um true ou falce
        alert(mensagemSucesso);

// Limpar os campos depois que o formulario for submetido no caso de sucesso
            nomeBenefi.value = '';
            numeroContaBeneficiario.value = '';
            valorDeposito.value = '';

    } else{
        alert('o nome não esta completo');
    }
})

console.log(form);
````

# Pratica D.O.M

## Editando Eventos

### Remover o comportamento do formulário de recarregar a tela após envio.

1.  para isso temos que selecionar o formulário. Para remover o comportamento tem que alterar o evento de submissão do formulário, para isso colocamos o nome do elemento e a função de eventos(addEventListener), entre parênteses o nome do evento(submit), e a ação q vai acontecer quando este evento for disparado(listener/ouvido), que é chamar uma função. Para remover a ação padrão de reload do formulário, temos que adicionar um parâmetro na função, este parâmetro é o evento, representado pela letra (e).

   ```javascript
   const form = docment.getElementById('form-deposito');
   
   form.addEventListener('submit', function(e){
       e.preventDefault();
   })
   ```

2. Criar a função para validar se o nome é completo, se ele possui mais de um nome dentro dele.

   ```javascript
   function validaNome(nomeCompleto){
       const nomeComoArray = nomeCompleto.split(' ');
       return nomeComoArray.length >= 2
   }
   ```

3. No escopo do formulário, criar uma variável para receber o conteúdo do campo 'nome' do formulário, e chamar a função validaNome, passando como parâmetro esta variável. Ele vai retornar um true ou false. Enviar um mensagem se o nome estiver certo ou errado.

   ````javascript
   form.addEventListener('submit', function(e){
       e.preventDefault();
       const nomeBeneficiaro = document.getElementById('nome-benefi')
       if (!validaNome(nomeBeneficiario.value)){
           alert("Nome incompleto")
       }else{
           alert("Parabéns")
       }
   })
   ````

4. Para melhorar o código, criar uma variável no escopo do formulário para dizer se o formulário é valido ou não

   ````javascript
   form.addEventlistener('submit', function(e){
   	e.preventDeault();
   	let formEValido = false;    
       const nomBeneficiario = document.getElementById('nome-benefi')
       formEValido = validaNome(nomeBeneficiario.value)
       if(formEValido){
           alert("Parabéns")
       }else{
           alert("Nome incompleto")
       }    
   })
   ````

5. Recuperar os outros campos do formulário e criar uma mensagem de sucesso

   ````javascript
   form.addEventlistener('submit', function(e){
   	e.preventDeault();
   	let formEValido = false;    
       
       const nomBeneficiario = document.getElementById('nome-benefi')
       const numeroContaBeneficiario = document.getElementById('num-conta')
       const valorDeposito  = document.getElementById('valor-deposito')
       const mensagemSucesso = "Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}";
       
       
       formEValido = validaNome(nomeBeneficiario.value)
       if(formEValido){
           alert(mensagemSucesso)
       }else{
           alert("Nome incompleto")
       }  
   })
   ````

6. Limpar os campos após submissão do formulario

   ````javascript
   form.addEventlistener('submit', function(e){
   	e.preventDeault();
   	let formEValido = false;    
       
       const nomBeneficiario = document.getElementById('nome-benefi')
       const numeroContaBeneficiario = document.getElementById('num-conta')
       const valorDeposito  = document.getElementById('valor-deposito')
       const mensagemSucesso = "Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}";
       
       
       formEValido = validaNome(nomeBeneficiario.value)
       if(formEValido){
           alert(mensagemSucesso);
           
           nomBeneficiario.value='';
           numeroContaBeneficiario.value='';
           valorDeposito.value='';        
           
       }else{
           alert("Nome incompleto")
       }  
   })
   ````

   

## Adicionar Elementos Visuais no Formulário

1. No HTML colocar o paragrafo de confirmação de Envio, adicionar uma classe e editar no CSS. Este paragrafo serve apenas como referencia para visualização, depois de feito no JS, ele será excluido

   ````html
   <p class="success-message">
       O montante de:<b>1000</b> foi enviado para o cliente:<b>Nome do cliente</b> - conta: <b>1</b>
   </p>
   ````

2. No JS, em mensagem de sucesso vamos colocar a tag html para deixar os paramentros em negrito

   ````javascript
   const mensagemSucesso = `Montante de:<b>${valorDeposito.value}</b> depositado para p cliente: <b>${nomeBenefi.value}</b>- conta <b>${numeroContaBeneficiario.value}</b>`;
   
   ````

3. Colocar o Texto da mensagem dentro do paragrafo HTML. Para escrever um conteúdo no HTML no elemento usamos o Atributo innerHTML e colocamos o conteúdo que queremos

   `````javascript
   // Para selecionar o Paragrafo
   document.querySelector('.success-message').innerHTML = mensagemSucesso;
   `````

4. Remover o conteúdo Fak do HTML, e ocultar o elemento <p> da tela

   ````css
   .success-message {
       background-color: #27ae60;
       padding: 16px;
       color: #fff;
       display: none;
   }
   ````

## Editar Atributos do CSS usando o JS

1. Colocar o elemento em uma variavel e acessar o estilo dela

   ````javascript
   if (formValido){
          const containerMensagemSucesso = document.querySelector('.success-message');
       
       //Acessa estilo e a propriedade que queremos mudar
       containerMensagemSucesso.style.display = 'block';
   ````

2. Fazer uma estilização para mensagem de campo incompleto no input nome

   ````javascript
   //No HTML, inserir o paragrafo com a mensagem de erro e estilizar no CSS
   <p class="error-message">
     O nome precisa ser completo
   </p>
   ````

3. Inserir a resposta de erro no loop(else)

   ````javascript
   //Copiar o Seletor criado para mensagem de sucesso
    else{
           document.querySelector('.error-message').style.display = block;
       }
   // Obs: Não foi criado uma variavel pq a mensagem não é dinamica
   
   ````

4. Adicionar uma borda ao elemento pelo JS

   ````javascript
   else{
           nomeBenefi.style.border = '1px solid red';
           document.querySelector('.error-message').style.display = block;
       }
   ````

5. Adicionar um Evento ao campo de nome para que a mensagem de erro suma quanto o nome for corrigido

   ````javascript
   //Elevar o nome do beneficiario para o escopo global do arquivo - ****
   ````

   
