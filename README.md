# kanui-test-ui-gft

Projeto GFT web

Testes automatizados utilizando Chai e WebdriverIO. Projeto de automação web (end-to-end).

# **Intalação e execução dos testes**

- **Instalação do NODE no Windows**

1º Passo: Baixar e instalar o [node.js](https://nodejs.org/dist/v14.16.1/node-v14.16.1-x64.msi);
2º Passo: Verificar o node instalado `node --version` e `npm --version`;
3º Passo: Realizar o git clone do projeto;
4º Passo: No diretório raiz do projeto, executar o comando `npm install`;


- **Instalação do NODE no Linux Ubunto**

1º Passo: Instalar o node.js `sudo apt-get install nodejs`;
2º Passo: Verificar o node instalado `node --version` e `npm --version`;
3º Passo: Realizar o git clone do projeto;
4º Passo: No diretório raiz do projeto, executar o comando `npm install`;

- **Instalação do NODE no Mac**

1º Passo: Baixar e instalar o [node.js](https://nodejs.org/en/);
2º Passo: Verificar o node instalado `node --version` e `npm --version`;
3º Passo: Realizar o git clone do projeto;
4º Passo: No diretório raiz do projeto, executar o comando `npm install`;

**Importante**

Caso o teste inicie e feche rapidamente, acesse o seu navegador Chrome e verifique a versão instalada. Se a versão é inferior a 90.xx.xx atualize o navegador. No arquivo `package.json` apague a linha da dependência `chromedriver`, apague o arquivo `package.lock.json`, apague a pasta `node_modules` e execute os comandos: `npm install chromedriver --chromedriver-force-download` em seguida `npm install`.

- **Execução dos testes**

Execute o comando: `ENV=PROD npm run test`

Os arquivos que serão executados através do comando `npm run nome_suite_test`, estão localizados no arquivo 'wdio.config.js'.

- **Visualizando o relatório**

**Windows**

Executar o comando `npx allure open` ou `allure open`

**Linux**

Para abrir os relatórios: `npx allure open`

**Importante:** Para repositórios baseados em debian, um PPA é fornecido:

`sudo apt-add-repository ppa:qameta/allure`
`sudo apt-get update`
`sudo apt-get install allure`

**Mac**

Importante: É necessário que o **Brew** esteja instalado na maquina.

Executar o comando `brew install allure`
Para abrir os relatórios: `allure open`

Execute o comando `allure open` ou `npx allure open` na raiz do projeto.

# **Frameworks**

- **webdriverIO**: Framework utilizado para realizar as automações mobile e web utilizando a linguagem Java Script;
- **Chai**: Chai é utilizado para as verificações dos testes realizados;
- **Mocha**: Mocha é a utilizado para o padrão BDD do projeto.

# **Libs**

- **moment**: Moment é lib para prover manipulações de datas/horas;
- **eslit**: ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript;
- **allure**: O Allure é uma lib para prover relatórios de execução de testes.

# **Estrutura do projeto**

- **data**: Pasta que contém informações dos dados da massa de teste e validações esperadas;

- **helpers**: Pasta com classes e métodos genéricos e auxiliares para os testes
   - **actions**: class é utilizada para criar métodos genéricos que possam ser utilizados em todos os testes e class de pageObject;

- **pageobjects**: Modelo PageObjects de cada tela;

- **test**: Cenários de testes;

**.eslintignore**: Arquivo para informar ao eslint quais arquivos serão ignorados na análise de código do .eslintrc.js;

**.eslintrc.js**: Arquivo do eslint que configura quais as regras que serão utilizadas para análise de código;

**.gitignore**: Arquivo que define quais pastas e arquivos serão ignorados em cada commit;

**babel.config.js**: Compilador javascript;

**constantes.js**: Arquivo contém todas as chamadas/instâncias dos objetos de cada página do PageObjects;

**package.json**: É um arquivo que contém as dependências do projeto e quais testes serão executados;

**readme.md**: Arquivo que descreve os passos para instalação e demais informações sobre o projeto;

**wdio.config.js**: É o arquivo de configuração do webdriverIO.



