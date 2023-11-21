- Criar um estado para o JS

- ````javascript
  const estado = reactive({
    tarefas:[{
      titulo:'Estudar ES6',
      finalizada:false,
    },
    {
      titulo:'Estudar SAAS',
      finalizada:false,
    },
    {
      titulo:'Ir para academia',
      finalizada:true,
    }]
  })
  ````

- Preencher o conteudo a partir do estado. Onde temos o <li>, usar a diretiva v-for

- ````javascript
  	<ul class="list-group mt-4">
        <li class="list-group-item" v-for="tarefa in estado.tarefas">
          <input :checked="tarefa.finalizada" :id="tarefa.titulo" type="checkbox">
          <label class="ms-3" :for="tarefa.titulo">
            <!-- Conteudo -->
            {{ tarefa.titulo}}
          </label>
        </li>
      </ul>
  ````

- Criar uma  classe para riscar o texto quando uma tarefa for finalizada.

- ````javascript
  <style scoped>
  .done{
    text-decoration: line-through;
  }
  </style>
  ````

- Inserir classe usando o :bind

- ````javascript
  Se tarefa.finalizada for verdadeiro ele aplica a estilização
  <label :class="{done:tarefa.finalizada}" class="ms-3" :for="tarefa.titulo">
  ````

- Filtrar Tarefas Pendentes

- ````javascript
  const getTarefasPendentes = () => {
    //Filtrar tarefas
    return estado.tarefas.filter(tarefa => tarefa.finalizada ===false)
  }
  ````

- Filtrar Tarefas Finalizadas

- ````javascript
  const getTarefasFinalizadas = () => {
    //Filtrar tarefas
    return estado.tarefas.filter(tarefa => tarefa.finalizada ===true)
  }
  ````

- 

- Chamar função no HTML

- ````javascript
  <header class="p-5 mb-4 mt-4 bg-light rounded-3">
        <h1 >Minhas Tarefas</h1>
        <p><!-- Acessa o retorno, que é um array. E através dele temos acesso ao atributo length -->
          Você possui {{ getTarefasPendentes().length }} tarefas pendentes
        </p>
      </header>
  ````

- Criar os filtros

  - Para criar os filtro, precisamos armazenar no estado o valor selecionado em "Todas Tarefas"

  - ````javascript
    const estado = reactive({
     * filtro:'todas',*
      tarefas:[{
        titulo:'Estudar ES6',
        finalizada:false,
      },
    ````

  - Em select chamar o @change

  - ```html
    /*O @change está associado ao evento de mudança do elemento <select>. Quando o valor selecionado muda, a expressão do lado direito do = é executada.
    
    evento => estado.filtro = evento.target.value: Esta é uma função de seta (arrow function) que recebe o evento (evento) como parâmetro. Quando o valor do <select> muda, essa função é chamada. O código dentro da função atualiza a propriedade estado.filtro com o valor selecionado no elemento <select>. O evento.target.value representa o valor selecionado no elemento <select>.*/
        
    <select @change="evento=> estado.filtro = evento.target.value" 				class="form-control">
        <option value="todas">Todas Tarefas</option>
        <option value="pendentes">Pendentes</option>
        <option value="finalizadas">Finalizadas</option>
     </select>
    ```

  - Criar função para retornar as tarefas a partir de uma filtragem

  - ````javascript
    const getTarefasFiltradas = () => {
      //Recuperar o Filtro
      const filtro = estado.filtro;
    
      switch(filtro){
        case 'pendentes':
          return  getTarefasPendentes();
        case 'finalizadas':
        return getTarefasFinalizadas();
        default:
          return estado.tarefas;
      }
    }
    ````

  - Passar a função getTarefasFiltradas para o in da <li>

  - ````javascript
    <li class="list-group-item" v-for="tarefa in getTarefasFiltradas()">
            <input :checked="tarefa.finalizada" :id="tarefa.titulo" type="checkbox">
            <label :class="{done:tarefa.finalizada ===true}" class="ms-3" :for="tarefa.titulo">
              <!-- Conteudo -->
              {{ tarefa.titulo}}
            </label>
    </li>
    ````

  - Inserir a dinâmica para finalizar uma tarefa

  - ````javascript
    /*
    No input, configuramos um modificador @change (modificador de evento em Vue.js). Esse modificador está associado ao evento de mudança, que, ao ocorrer, dispara a função especificada. A função recebe um parâmetro, evento, que é utilizado para acessar o estado da tarefa. O atributo finalizada da tarefa é atualizado com o valor de evento.target.checked.
    
    A propriedade checked no input não é necessária neste contexto, pois estamos manipulando o evento de mudança diretamente. O estado do checkbox é controlado pela propriedade finalizada da tarefa.
    -->
    No input criamos um change (modificador de evento em Vue.js), que recebe um evento, que acessa a tarefa com o atributo finalizada que recebe o valor de evento.target.checked (checked é uma propriedade) 
    */
    <input @change="evento => tarefa.finalizada = evento.target.checked" checked="tarefa.finalizada" :id="tarefa.titulo" type="checkbox">
    ````

  - Cadastrar uma Tarefa

    - Inserir evento de submit no formulario

    - ````javascript
      <form @submit="cadastraTarefa">
      ````

    - Inserir uma validação no input (required)

    - ````javascript
       <input required type="text" placeholder="Digite aqui a descrição da tarefa" class="form-control">
      ````

    - Criar a função cadastraTarefa

      - Antes de fazer o push, precisamos armazenar o nome que o usuario digitar no campo para uma propriedade de um estado (tarefaTemp:"",)

      - ````javascript
        const estado = reactive({
          filtro:'todas',
          tarefaTemp:"",
          tarefas:[{
            titulo:'Estudar ES6',
            finalizada:false,
          },
        ````

      - No input criar um evento de @change

      - ````javascript
         <input @change="evento => estado.tarefatemp = evento.target.value" required type="text" placeholder="Digite aqui a descrição da tarefa" class="form-control">

    - Montar Função para Inserir nova Tarefa

    - ````javascript
      const cadastraTarefa = () => {
          //Objeto
        const tarefaNova = {
          titulo:estado.tarefaTemp,
          finalizada:false,
        }
        estado.tarefas.push(tarefaNova);
      }
      ````

    - Remover ação de recarregar formulario após o envio(preventDefault:

    - ````javascript
      //Basta adicionar o .prevent após o submit no formulario
      
      <form @submit.prevent="cadastraTarefa">
      
      
      ````

    - Limpar Formulario após envio da tarefa nova, inserir no input :value="estado.tarefaTemp"

    - ````javascript
      <input :value="estado.tarefaTemp" @change="evento => estado.tarefaTemp = evento.target.value" required type="text" placeholder="Digite aqui a descrição da tarefa" class="form-control">
      ````

    - e depois passar na função "cadastraTarefa" uma string vazia para a "tarefaTemp"

    - ````javascript
      const cadastraTarefa = () => {
        const tarefaNova = {
          titulo:estado.tarefaTemp,
          finalizada:false,
        }
        estado.tarefas.push(tarefaNova);
        //Limpa input após envio da tarefa nova.
        estado.tarefaTemp="";
      }
      ````



## Criar Componentes

