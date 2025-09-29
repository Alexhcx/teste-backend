# Teste Backend

Este é um projeto de teste desenvolvido como parte de um processo seletivo para uma vaga de backend. A aplicação consiste em uma API REST para gerenciamento de produtos e categorias, construída com Node.js, Express e Sequelize.

## 🚀 Configuração do Ambiente

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

  - Node.js (versão 18 ou superior)
  - Um gerenciador de pacotes como `npm` ou `yarn`
  - Um banco de dados MySQL ativo

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/alexhcx/teste-backend.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd teste-backend
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

### Arquivo de Ambiente (`.env`)

Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente, substituindo pelos valores de configuração do seu banco de dados local.

```env
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=seu_banco_de_dados
DB_HOSTNAME=localhost
DB_PORT=3306
PORT=3000
```

### Banco de Dados

Para configurar o banco de dados, execute os seguintes comandos do Sequelize CLI a partir da raiz do seu projeto.

1.  **Executar as migrations:** Este comando irá criar todas as tabelas necessárias no seu banco de dados.

    ```bash
    npx sequelize-cli db:migrate
    ```

2.  **Executar os seeders:** Este comando irá popular o banco de dados com dados de teste para categorias e produtos.

    ```bash
    npx sequelize-cli db:seed:all
    ```

## ▶️ Executando a Aplicação

Para iniciar o servidor, utilize um dos seguintes comandos:

  - **Para ambiente de desenvolvimento (com recarregamento automático):**

    ```bash
    npm run dev
    ```

  - **Para iniciar em modo de produção:**

    ```bash
    npm start
    ```

Após a inicialização, a API estará disponível em `http://localhost:3000`.