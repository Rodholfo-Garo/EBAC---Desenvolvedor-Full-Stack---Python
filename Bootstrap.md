# Fundamentos Bootstrap

## O que é o Bootstrap?

Bootstrap é um framework (abstração que une códigos) muito usado no desenvolvimento front-end, que fornece estruturas de CSS ja feitas, para a criação de sites e aplicações responsivas de forma rapida e simples.

Foi desenvolvido para o Twitter por um grupo de desenvolvedores liderados por Mark Otto e Jacab Thornton e muito rápido se tornou um das estruturas de front-end e projetos abertos mais populares do mundo.

**O que seria o ‘’Data’’ que aplicamos nas classes? (data-bs)**



- **data** **→** Significa que ele é um atributo, um objeto que pode ser utilizado
- **bs** **→** Vem de **bootstrap**, essa nomenclatura após o data é somente um nome que foi dado
- E o último elemento é a função que ele irá executar, resumindo, o que será feito
- Então **data-bs-toggle="collapse"** faz o efeito de descer e subir e o **data-bs-target="#resposta1"** diz quem é o alvo que será exibido e assim existem vários outros

## Construção de layout com Bootstrap

O Bootstrap trabalha com um sistema de grid, onde construímos p layout a partir de linhas e colunas.

Para construir um layout com o Bootstrap utilizamos as classes container, row e col.

O Bootstrap funciona com um sistema de 12 colunas e podemos estar customizando os elementos para ocuparem um determinado número de colunas, fazemos isso com um sufixo numérico, por exemplo, a classe col-6 criará um elemento que ocupará 6 colunas, metade de uma linha.

A classe container cria o elemento que irá encapsular o conteúdo da pagina, o container do Bootstrap ja irá centralizar e limitar a largura do conteúdo.

Com a classe row criamos a linha dentro dela e inserimos os elementos com a classe col.

O Bootstrap fornece alguns breakpoint pré-definidos e podemos utiliza-los através da estrutura de classe col-BREACKPOINT-COLUNAS, exemplo:

- col-md-6 = md=médio, ocupará 6 colunas.
- col-sm-12 = sm=pequeno, ocupará a linha toda.
- col-lg-4 = lg=largo, ocupará um terço da linha.



````html
<div class="container">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
    </div>
</div>
````



Relação de classes e breackpoint:

<table>
    <thead>
        <th>Classe</th>
        <th>BreackPoint</th>
        <th>Largura do Container</th>
    </thead>
    <tbody>
        <tr>
            <td>.col-*</td>
            <td> <576px </td>
            <td>Auto</td>
        </tr>
        <tr>
            <td>.col-sm-*</td>
            <td>>=576px</td>
            <td>540px</td>
        </tr>
          <tr>
            <td>.col-md-*</td>
            <td>>=768px</td>
            <td>720px</td>
        </tr>
          <tr>
            <td>.col-lg-*</td>
            <td>>=992px</td>
            <td>960px</td>
        </tr>
          <tr>
            <td>.col-xl-*</td>
            <td>>=1200px</td>
            <td>1140px</td>
        </tr>
          <tr>
            <td>.col-xxl-*</td>
            <td>>=1400px</td>
            <td>1320px</td>
        </tr>
    </tbody>

​        

## Tipografia

O Bootstrap oferece algumas classes para trabalharmos com texto, as <b>classe:h1</b> até <b>h6</b> e <b>display-1</b> até <b>display-6</b>.

## Tabelas

Existem algumas variações que podemos utilizar em conjunto com a classe table: 

- table-primary, 
- table-secondary, 
- table-success, 
- table-danger, 
- table-warning, 
- table-info, 
- table-light, 
- table-dark.

```html
 <table class="table table-primary">
            <thead>
                <th>Texte 1</th>
                <th>Texte 1</th>
                <th>Texte 1</th>
            </thead>
            <tbody>
                <td>123</td>
                <td>456</td>
                <td>789</td>
            </tbody>      
</table>
```

## Botões

Existem algumas variações que podemos utilizar em conjunto com a classe btn: 

- btn-primary, 

- btn-secondary, 

- btn-success, 

- btn-danger, 

- btn-warning, 

- btn-info, 

- btn-light, 

- btn-dark, 

- btn-link. 

  

  Além disso temos a classe btn-outline-[VARIAÇÃO].

E para definir o tamanho do botão temos as classes: btn-lg, btn-md e btn-sm.

````html
<button class="btn btn-primary" type="submit">Enviar</button>
````

## Formulários

Para estilizar um formulário e seus elementos o Bootstrap temos as classes :

- form-label: para os elementos da label;
- form-control: para os campos de entrada de dados, inputs e textarea;
- form-select: para os elementos select;
- form-check-lebel: para os elementos label do input tipo check;
- form-check-input: para os elementos inputs do tipo check.

```html
<h2>Entre em contato</h2>
    <form >
        <label class="form-label" for="nome">Seu nome:</label>
        <input class="form-control" type="text" id="nome"/>
        <label class="form-label" for="email">Seu e-mail:</label>
        <input class="form-control" type="email" id="email"/>
        <label class="form-label" for="mensagem">Sua mensagem</label>
        <textarea id="mensagem" class="form-control"></textarea>

        <label class="form-label" for="">País de Origem</label>

        <div class="col-4">                        
            <select class="form-select form-select-lg" name="" id="">
                <option value="">opção 1</option>
                <option value="">opção 2</option>
                <option value="">opção 3</option>
                <option value="">opção 4</option>
                <option value="">opção 5</option>
                <option value="">opção 6</option>
            </select>
        </div>

        <div class="form-check form-switch">
            <label class="form-check-label" for="aceito-termos">Li e concordo com os termos do SITE</label>
            <input class="form-check-input" type="checkbox" id="aceito-termos">
        </div>
        <button class="btn btn-success">Enviar</button>              
    </form>
```



- Obs - Atalho para escrever no HTML: `div.mb-3>label{País de Origem} + select>option{Opção $}*6`
- Para tirar o padding usar o <b>g-0</b> `<div class="container g-0">` 



## Collapse, alertas e accordions

Para alguns componentes do Bootstrap que fazem uso do JavaScript, utilizamos o atributo data-bs. 

### Accordions

De forma literal **accordion** é **acordeão** em inglês, então quando visualizamos ele fisicamente fica mais fácil de entender. Esse instrumente faz o movimento de **esticar** e **retrair** e é exatamente isso que iremos construir, quando clicarmos no elemento ele irá esticar e quando clicado novamente irá retrair. Para desenvolver o **accordion** precisamos utilizar alguns atributos do **JS**, então primeiramente precisamos importar o CDN Link JS do **bootstrap**. É o mesmo processo de importar o link CSS, porém você copia do JS e coloca ele na tag **<script>** (lembrando de colocar logo antes da tag <body> fechar). Após isso já podemos desenvolver nosso **accordion**

Muito utilizado em FAQ.

 **O que seria o ‘’Data’’ que aplicamos nas classes? (data-bs)**

- **data** **→** Significa que ele é um atributo, um objeto que pode ser utilizado
- **bs** **→** Vem de **bootstrap**, essa nomenclatura após o data é somente um nome que foi dado
- E o último elemento é a função que ele irá executar, resumindo, o que será feito
- Então **data-bs-toggle="collapse"** faz o efeito de descer e subir e o **data-bs-target="#resposta1"** diz quem é o alvo que será exibido e assim existem vários outros

````html
   <!--Criar o accordion-->
        <div class="accordion">
            
            <!--Criar o item dentro do accordion-->
            <div class="accordion-item">
                
            <!--Criar cabeçalho do nosso item, utilizando a classe accordion-header-->
                <div class="accordion-header">
                    
             <!--Criar cabeçalho do nosso item, utilizando a classe accordion-header | O atributo data-bs-toggle="collapse" vem do JS importado, ele da o efeito de descer e subir | O  atributo data-bs-target="#resposta1" diz  quem é o alvo que ser exibido.-->      
                    <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#resposta1" > Pergunta</button>
                </div>
                <!-- A classe accordion-collapse e a classe collapse, disemos define como ser[a exibido ao clicar no bot'ao. Show diz que que vai iniciar visivel-->
                <div id="resposta1" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        Resposta da Pergunta
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header">
                    <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#resposta2" > Pergunta2</button>
                </div>
                <div id="resposta2" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        Resposta da Pergunta2
                    </div>
                </div>
            </div>
        </div>
````



### Collapse

Collapse  significa desmoronamento, a forma com que o elemento será exibido

Então para criarmos esse efeito de desmoronamento adicionamos a classe **collapse** na nossa **div** e adicionamos o atributo **collapse** ao **data-bs-toggle** para o botão

Faz aparecer um elemento oculto.



````html
  
 /*Largura fixa no elemento p fazer o texto aparecer na horizontal, sem ele o texto vem na vertical*/
<style>     
    #preco p{
   			width: 300px;
    		}
</style>
    
</head>
<body>
    <div style="border: 1px solid red;"class="container">
		<!--Quando passamos o data-bs toggle="collapse" dizemos que este efeito será aplicado quando o botão for clicado e quando passamos o data-bs-target="#preco" dizemos que o elemento que tiver o id preco será o alvo do efeito-->
        <button class="btn btn-primary " data-bs-toggle="collapse" data-bs-target="#preco">
            Ver Preço
        </button>
        
        <!--Passamos a classse collapse para a div para que ela comece sem ser exibida-->
        <div class="collapse collapse-horizontal" id="preco">
            <p>
                3x de R$300,00
            </p>
        </div>
    </div>
````

### Alerts

Criar alerta e mensagens. Apresente mensagens contextuais para ações típicas dos usuários.

- Para criar um alerta na nossa página, criaremos uma **div** e adicionaremos a **classe alert**, depois colocamos o texto que desejarmos para este alerta
- Depois podemos criar um **botão** para fechar o **alert** quando o usuário desejar 
- Criamos um **button** e adicionamos a **classe btn-close**
- Após isso adicionamos o atributo **data-bs-dismiss=”alert”** no botão para que ele exerça a função de fechar o alerta, lembrando que quando utilizamos o **data-bs** estamos utilizando alguma função do **JS** já pronto no **bootstrap**
- Após isso adicionamos a **classe alert-dismissible** no nosso **alert** para colocar o **X** do botão na outra extremidade da **div**, assim ficando mais harmonioso 

````html
<body>

    <!-- alert-dismissible joga o "X" para o lado esquerdo -->
    <div class="alert alert-dark alert-dismissible fade show">
        <!-- Quando o alerta é fechado ele é removido de todo o conteudo HTML -->
        <!-- Inserir Botão de fechar o alerta || O Atributo data -->        
        <button class="btn-close "data-bs-dismiss="alert"></button>
        Sou uma mensagem de confirmação
    </div>
    
    <!--O botão deve ficar dentro da DIV-->


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
````



# Bootstrap Avançado

## Cards

Card é uma caixa de conteudo | O conceito de semantica se aplica a ele tambem.

Um **cartão** é um contêiner de conteúdo flexível e extensível. Inclui opções para cabeçalhos e rodapés, uma ampla variedade de conteúdo, cores de fundo contextuais e opções de exibição poderosas

- Podemos utilizar os **cards** para diversas funcionalidades na nossa página, podemos organizar conteúdos, artigos e muito mais
- A criação de **cards** se assemelha muito com a de **accordions**, onde existe a criação do **card**, seu **cabeçalho** (se desejar), seu **corpo** e caso também queira, um **rodapé** (claro, existindo diversas formas de se estilizar seus cards, mas resumindo é isso)
- Estrutura  Básica- **card** > **card-header** >**card-body** > **card-title** >**card-text** > **card-footer**

````HTML
<!---->
<!--Adicionar a classe card. Depois de criar o cartão podemos adicionar um cabeçalho, usasndo a classe  card-header-->

<article class="card">
    <!--Cabeçalho do cartãõ-->
    <header class="card-header">
        Desenvolvimento Web
    </header>
    
    <img src="https://via.placeholder.com/100x100" alt="">
    <!--Corpo do cartão-->
    <div class="card-body">
        <h4 class="card-title">Card do BootStrap</h4>
        <p class="card-text">Conheça os cards do Bootstrap e suas variações</p>
        <a href="#" class=" btn btn-primary">Leia Mais</a>
    </div>
    <!--Rodapé do cartão-->
    <footer class="card-footer">
        Postado em<time>04/04/2023 as 21:21:00</time>
    </footer>
    
</article
````

## Carousel

O uso do Bootstrap pode ser divido entre um uso simples e avançado. No uso simples utilizamos apenas o CSS do Bootstrap e seus componentes estilizados. Já no uso avançado passamos a fazer o consumo do código JavaScript do Bootstrap. Esse é o caso do Carousel onde precisamos importar o CSS e o JS do Bootstrap. O Bootstrap localiza e manipula os elementos através do atributo data-bs-*. Durante a construção do Carousel utilizamos alguns desses atributos como: data-bs-ride, data-bs-target, data-bs-slide e data-bs-slide-to.

- Estrutura Básica - **carrousel slide** > **carousel-inner** > **carousel-item active**  > **carousel-caption**



````html
<body>
    <!--O atribto data-bs-ride  usado para marcar um carrossel como animado a partir do carregamento da página. Ele indica ao BOOTStrap que este conteudo se trata de umm carousel-->
    <!-- Neste conteiner do carousel, colocamos a classe carousel-fade para adcionar um efeito na transição das imagens -->
    <div id="carousel-exemplo" class="carousel carousel-fade slide" data-bs-ride="carousel">

        <!-- Container do Carousel -->
        <div class="carousel-inner">

            <!--Slide do carrousel | O atributo data-bs-interval edita o tempo de transição da imagem | A classe .active precisa ser adicionada a primeira imagem dele para que ele funcione  -->
            <!-- A classe d-block aplica o display block e o w-100 ocupa  largura total -->
            <div data-bs-interval="2000" class="carousel-item active">
                <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/04/02/08/34/snake-7894057_960_720.jpg" alt="">
                <!-- Inserir Texto no Carousel -->
                <div class="carousel-caption">
                    <h2>Foto de uma cobra</h2>
                </div>
            </div>
            <div data-bs-interval="2000" class="carousel-item">
                <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/03/28/09/28/cat-7882701_960_720.jpg" alt="">
                <div class="carousel-caption">
                    <h2>Foto de um gato</h2>
                </div>
            </div>
            <div data-bs-interval="2000" class="carousel-item">
                <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/03/29/17/16/street-art-7886014_960_720.jpg" alt="">
                <div class="carousel-caption">
                    <h2>Foto de um bairro</h2>
                </div>
            </div>
        </div>
        <!-- Botão para voltar 1 slide -->
        <!-- Para adiconar interatividade ao botão, temos que identificar o carousel adicionando um ID e no botão adicionar 2 atributos, o primeirko data-bs-target(vaidizer qual elemento vai ser afetado com o efeito do clique )="#carousel-exemplo"-->
        <button data-bs-target="#carousel-exemplo" data-bs-slide="prev" class="carousel-control-prev" type="button">
            <span class="carousel-control-prev-icon"></span>
        </button>

        <button data-bs-target="#carousel-exemplo" data-bs-slide="next" class="carousel-control-next" type="button">
            <span class="carousel-control-next-icon"></span>
        </button>

        <!-- Adicionar Indicadores -->
        <!-- O atributo data-bs-slide-to="0" vai dizer para qual slide o carousel deve ir, ele fuunciona como um array do JS -->
        <!-- O primeiro elemento precisa ter uma classe para indicar que ele é o elemento ativo quando a pagina for carregada -->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel-exemplo" class="active" data-bs-slide-to="0"></button>
            <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="2"></button>
            
        </div>
    </div>
    
    <script src="lib/bootstrap.bundle.min.js"></script>
</body>
````



## Dropdown

- Vamos lá, mais uma funcionalidade bem simples de ser criada mas muito eficiente, temos muitas variações então aconselho que leiam a documentação que vou deixar no final do resumo
- Para criarmos um menu Dropdown vamos seguir a mesma linha de raciocínio que usamos para a criação de cards, carousel e outras coisas no **Boostrap**
- Estrutura Básica - **dropdown** > **dropdown-toggle** > **dropdown-menu** > **dropdown-item**

````html
 <!-- Botão Simples -->
    <div class="container">
        <div class="dropdown">
            <!-- O atributo data-bs Traz animação ao botão com o uso do JS -->
            <button data-bs-toggle="dropdown" class="btn btn-primary dropdown-toggle">
                Cadastrar
            </button>
            <!-- POdemos adicionar variaçoes no menu dropdown (menu-dark) -->
            <ul class="dropdown-menu dropdown-menu-dark">
                <!-- Estilizando o menu pelo BS -->
                <li class="dropdown-item">
                    <a href="#">Novo usuario</a>
                </li>
                <li class="dropdown-item">
                    <a href="#">Novo Fornecedor</a>
                </li>
                <li class="dropdown-item">
                    <a href="#">Novo Funcionario</a>
                </li>
            </ul>
        </div>
    </div>

    <!-- Botão Composto -->
    <div class="container">
        <!-- btn-group Junta os botões, faz parecer que é um botão só -->
        <div class="btn-group">

            <!-- Da para Colocar alguma outra ação, como encaminhar para outra pagina -->
            <button class="btn btn-primary ">
                Cadastrar
            </button>
            <!-- Acessa opções -->
            <button class="btn btn-primary dropdown-toggle dropdonw-toggle-split" data-bs-toggle="dropdown"> 
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li class="dropdown-item">
                    <a href="#">Novo usuario</a>
                </li>
                <li class="dropdown-item">
                    <a href="#">Novo Fornecedor</a>
                </li>
                <li class="dropdown-item">
                    <a href="#">Novo Funcionario</a>
                </li>
            </ul>
        </div>
    </div>
    <script src="/lib/bootstrap.bundle.min.js"></script>
````



## Modal

pode ser conhecida como o Pop-up.

Pop-ups são janelas que aparecem na tela sem serem solicitadas e podem ter várias finalidades, como exibir anúncios, notificações ou formulários de login. No entanto, muitos usuários os consideram invasivos e irritantes, e por isso muitos navegadores modernos possuem bloqueadores de pop-ups integrados. Existem alternativas menos intrusivas para exibir informações adicionais em uma página, como sobreposições modais ou expansão da página.

DOMContentLoaded é um evento do JavaScript que é acionado quando a estrutura da página HTML é carregada e pronta para ser manipulada pelo JavaScript.

- Estrutura Básica - **modal** > **modal-dialog** > **modal-content** > **modal-header** > **modal-body** > **modal-footer**

````html
 <!-- Conhecida como pop-up -->
    <!-- Para aciona-la precisamos passar os parametro/atributos do BS -->
    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exemplo-modal">
        Abrir Modal
    </button>

    <!-- Criando a Modal com o BS | Por padrão a Modal não é exibida, por isso colocamos o botão para aciona-la -->

    <!-- O atributo data-bs-backdrop remove o comportamento de fechar a modal quando clicamos fora da caixa -->    
    <div class="modal" id="exemplo-modal" data-bs-backdrop="static">
        <div class="modal-dialog">
            <!-- Dividimos a modal em 3 partes, cabeçalho, corpo e roda-pé -->
            <div class="modal-content">
                <div class="modal-header">
                    <h5>Titulo da Modal</h5>

                    <!-- Botão para fechar a modal, sem o atributo data-bs, ele não fecha -->
                    <button data-bs-dismiss="modal" type="button" class="btn-close"></button>
                </div>
                <div class="modal-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, molestiae molestias accusantium rem libero ducimus pariatur magni hic corporis esse? Laborum, voluptate quibusdam? Sed deleniti, exercitationem ratione eaque magnam quo.
                    </p>
                </div>

                <!-- Adicionar Botão de Confirmar e Cancelar -->
                <div class="modal-footer">
                    <h5>Roda-pé da Modal</h5>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">Confirmar</button>
                </div>

            </div>
        </div>
    </div>

    <script src="lib/bootstrap.bundle.min.js"></script>

    <!-- Abrir a Modal com o JS -->
    <!-- Vai abrir a modal apenas quando todo o documento HTML for carregado, a mesma coisa do document.ready do Jquery-->
    <script>
        /* DOMContentLoaded - Espera todo o conteudo do DOM ser carregado para executar o codigo JS */
        document.addEventListener('DOMContentLoaded', function(){
            const modalExemplo=new bootstrap.Modal('#exemplo-modal')

            /* Função para exibição da Modal */

            modalExemplo.show();

            /* Adicioinar um delay para carregar o pop-up 

            setTimeout(function(){
                modalExemplo.show();
            }, 3000);*/
        })
    </script>
````





## Navbar

- Utilizamos o menu **Navbar** dentro do Header, ele ficará localizado normalmente no cabeçalho da nossa página
- Como em outras funcionalidades do **bootstrap** temos vários estilos para poder aplicar em nosso **Navbar**
- Podemos utilizar o **Navbar** como um menu hambúrguer, como um menu lateral e entre outras formas, confira a documentação para ver todas as possibilidades → [**https://getbootstrap.com/docs/5.0/components/navbar/**](https://getbootstrap.com/docs/5.0/components/navbar/)
- Estrutura Básica - **navbar navbar-expand-lg** > **navbar-toggler** > **collapse navbar-collapse** > **nav nav-pills navbar-nav** > **nav-item ** > **nav-link**

````html
<header id="cabecalho">
        <!-- expand-lg tira o hamburguer no desktop -->
        <div class="navbar navbar-expand-lg">
            <div class="container">
                <h1>Titulo do Site</h1>

                <!-- Adicionar menuHamburguer -->
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <!-- Acionar botão Hamburguer -->
                <nav id="menu" class="collapse navbar-collapse justify-content-end">
                    <!-- Adicionar espaçamento entre o links class-"nav-pills -> nav-item -> nav-link" -->
                    <!-- navbar-nav deixa os itens um a baixo do outro -->
                    <ul class="nav nav-pills navbar-nav">
                        <li class="nav-item">
                            <!-- a classe active mostra qual pagina esta ativa no momento -->
                            <a class="nav-link active" href="#incio">Início</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#Produto">Produtos</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#Promocoes">Promoções</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#Contato">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <!-- Mudar Item ativo ao rolar a pagina -->

    <div data-bs-spy="scroll" data-bs-target="#cabecalho">
        <section id="incio">
            <h2 >Início</h2>
        </section>
    
        <section id="Produto">
            <h2 >Produtos</h2>
        </section>
    
        <section id="Promocoes">
            <h2>Promoções</h2>
        </section>
    
        <section id="Contato">
            <h2>Contato</h2>
        </section>
    </div>

    <script src="lib/bootstrap.bundle.min.js"></script>
````



````css
 <style>
        .navbar-nav .nav-link.active{
            color: white;
        }

        .nav-link{
            text-align: center;
        }

        /* Fazer cada seção ocupar 100% da area visivel */
        section{
            height: 100vh;
            background-color: antiquewhite;
            padding-top: 70px;
        }

        header{
            position: sticky;
            top: 0;
            left: 0;
            background-color: #fff;
        }
    </style>
````



## Abas

- Podemos utilizar **abas** para exibir informações sobre algo na página, então por exemplo, podemos criar dentro das nossas seções uma descrição que será exibida assim que o botão for clicado, fazendo assim uma dinâmica para o usuário já que ele clica para exibir as informações
- A criação dessas **nav-tabs** são bem tranquilas e intuitivas, vamos ver no código

````html
<section id="Produto">
            <h2 >Produtos</h2>
            <!-- Criar Aba -->
            <div class="container">

                <!-- Dar aparencia de ABA -->
                <!-- Para deixar a Aba com aparencia de Botão, basta trocar o nav-tabs por nav-pills -->
                <nav class="nav nav-pills">
                    <button data-bs-toggle="tab" data-bs-target="#aba1" class="nav-link active" type="button">Eletronicos</button>
                    <button data-bs-toggle="tab" data-bs-target="#aba2" class="nav-link " type="button">Moda Masculina</button>
                    <button data-bs-toggle="tab" data-bs-target="#aba3" class="nav-link " type="button">Moda Feminina</button>
                </nav>
                <!-- Conteudo da ABA -->
                <div class="tab-content">

                        <!-- Cada DIV é o conteudo de uma aba-->
                    <div class="tab-pane active" id="aba1">
                        Conteudo Eletronicos
                    </div>
                    <div class="tab-pane" id="aba2">
                        Conteudo da Moda Masculina
                    </div>
                    <div class="tab-pane" id="aba3">
                        Conteudo de Moda Feminina
                    </div>

                </div>
                
            </div>
        </section>
````



## Toasts

Basicamente é um aviso que aparece na tela do ususario, uma mensagem de sucesso, alerta ou falha.

- Vamos utilizar os **Toasts** para alguns avisos, não chega a ser um pop-up mas podemos utilizar para coisas mais sutis
- O desenvolvimento é bem fácil
  - **toast-container → toast → toast-header → toast-body** 
- Podemos ativar os **toasts** a partir de um botão ou após o carregamento da página, hoje vamos aprender a utilizar a partir de um botão 
- Estrutura Básica - **toast-container** > **toast** > **toast-header** 

````html
<!-- Toasts -->
    <!-- Inicialmente o toast não pe visivel, ele tem que ter um ativador, umcóddigo JS -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
    <!-- O toast é divido entre o cabeçalho e o corpo de alerta exibido -->
    <div class="toast" id="mensagens-alerta">
        <header class="toast-header">
            <strong>Importante</strong>
        </header>
        <toast-body>
            Voce possui 10 mensagens não lidas

            <!-- Botão para fechar a Mensagem -->
            <!-- mt-2 (mt=margem top) -->
            <div class="mt-2 pt-2 border-top">
                <button data-bs-dismiss="toast" class="btn btn-danger" type="button">
                    Descartar
                </button>
            </div>
        </toast-body>
    </div>
</div>

    <script src="lib/bootstrap.bundle.min.js"></script>
    <!-- Toast -->
    <script>
        const ativadorToast = document.getElementById('btn-checar-emails')
        const mensagem=document.getElementById('mensagens-alerta')

        /*Verificar se este elemento Existe*/
        if(ativadorToast){
            ativadorToast.addEventListener('click', function(){
                const toast = new bootstrap.Toast(mensagem);
                toast.show();
            })
        }
    </script>
````



