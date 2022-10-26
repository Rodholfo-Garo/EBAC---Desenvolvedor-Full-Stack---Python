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











