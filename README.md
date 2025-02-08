<div align="center">
    <img alt="Easy Task" src="./public/assets/images/png/task-management-logo.png" width="250px">
</div>

## 📖 Introdução
Este projeto consiste na implementação de uma interface de gerenciamento de tarefas para equipes, um tipo de to-do list. O propósito da aplicação é aprender e aplicar conceitos fundamentais de angular como componentes, services, módulos etc.

Esse projeto foi desenvolvido com base no curso [Angular - The Complete Guide (2025 Edition)
](https://www.udemy.com/course/the-complete-guide-to-angular-2/) de Maximilian Schwarzmüller.

Embora esta seja minha segunda aplicação com Angular, foi a primeira vez que tive o suporte de um curso completo. Isso me permitiu entender melhor as boas práticas, a estrutura do framework.

## 🛠️ Tecnologias Utilizadas

- **Angular**: Versão 19.1.4
- **Git**
- **GitHub Pages** (para deploy)


## 💻 Como Executar o Projeto Localmente

> 🛈 Necessário ter o Angular CLI instalado na sua máquina. [Saiba mais](https://angular.dev/installation).

1. Clone o repositório:
   ```bash
   git clone https://github.com/gabriel-mns/easy-task.git
   cd easy-task
   ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Rode o servidor local:
   ```bash
   ng serve
   ```

4. Acesse a aplicação no navegador:
    ```
    http://localhost:4200
    ```

    A aplicação também está hospedada no [Github Pages](https://gabriel-mns.github.io/easy-task/).
   
## 📋 Funcionalidades

- Listagem de tasks por usuário
- Cadastro de novas tasks
- Armazenamento de dados no localstorage*
- Marcar tasks como concluídas (remove da lista)

| * Há um carregamento inicial de dados de tasks e usuários vindo de arquivos estáticos disponíveis em `src/app/data`.

## ⚙️ Como funciona

### O código

Os componentes da aplicação são divididos em componentes compartilhados, componentes relacionados a tasks e componentes de usuário.

Os componentes compartilhados são:

- **Cabeçalho (Header)**: Contém a logo, e um texto breve.

- **Cartão (Card)**: Uma estilização padrão para os cartões da aplicação. Utilizado nas tasks e na listagem de usuários

O principal componente relacionado a task:

- **Task**: Um cartão exibindo dados da task como título, data, etc.

O principal componente relacionado a usuários:

- **Usuário (User)**: Um cartão exibindo nome e foto de perfil do usuário.

A aplicação também conta com um serviço de tasks para cadastro, leitura e remoção de tasks.

### A aplicação
Para usar a aplicação, é bem simples:

- Selecione um usuário da lista para ver as taks dele
- Clique em "Add Task" para adicionar uma nova task
- Insira os dados da task e clique em "Create"
- Clique em "Complete" para apagar a tarefa da lista
  
## 🧠 Aprendizados

1. **Módulos**: 
   Só tinha usado angular com componentes standalone, nunca tinha utilizado módulos. Agora consegui aprender a organizar a aplicação em módulos, separando funcionalidades e componentes específicos

2. **Eventos**: 
   Pude explorar e compreender melhor a utilização dos eventos. Aprendi principalmente a criar eventos personalizados e como utilizá-los.

3. **Angular geral**: 
   Como a minha experiência anterior com angular não foi com o apoio de um curso, muitos pontos tinham ficado soltos. Fazer esse projeto completo me deu uma visão mais concisa de como o angular funciona e também respondeu a alguns porquês.

## ✅ Pontos de Melhoria
- **Melhorar organização de pastas**: 
    Os models estão localizados dentro da pasta de componentes, acredito que não seja uma boa prática uma vez que mesmo que estejam relacionados com "task" ou "user" eles não são componentes. Talvez fosse melhor separá-los em pastas diferentes mas de um modo que ainda fique "próximo" dos outros elementos de "user" e "task".

## 🔗 Links

- **Curso de Referência**: [Angular - The Complete Guide (2025 Edition)
](https://www.udemy.com/course/the-complete-guide-to-angular-2/)
- **Projeto Hospedado no GitHub Pages**: [Easy Task - Gabriel Martins](https://gabriel-mns.github.io/easy-task/)
