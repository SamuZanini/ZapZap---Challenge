# 🤖 Desafio Chibas - ZapZap simples para o Samuel

## 📝 Descrição
Bem-vindo Samuca ao seu primeiro Desafio Chibas! Este projeto é um bot de WhatsApp simples usando a biblioteca whatsapp-web.js. O bot vai te ajudar a aprender sobre automação de mensagens no WhatsApp.

## 🗓️ Data de Entrega
01 de outubro

## ⚠️ ATENÇÃO! EXTREMAMENTE IMPORTANTE! ⚠️

# UM DEV DEVE LER DOCUMENTAÇÃO E NÃO ENTRAR NO TUTORIAL HELL
# NÃO VEJA TUTORIAIS DO YOUTUBE
# APENAS DOCUMENTAÇÃO E STACKOVERFLOW

## ✨ O que você vai fazer
- 👋 Criar um bot que responde apenas quando o **Chico** mandar uma mensagem
- 🚀 Adicionar respostas com botões
- 🖼️ Fazer o bot enviar uma imagem padrão com uma mensagem específica

## 📋 O que você precisa
- Node.js (versão 14 ou mais nova)
- npm (geralmente vem junto com o Node.js)
- Vontade de aprender e pesquisar!

## 🛠️ Como começar

1. Primeiro, crie uma pasta para o projeto e entre nela:
   ```bash
   mkdir meu-bot-whatsapp
   cd meu-bot-whatsapp
   ```

2. Instale as coisas que o projeto precisa:
   ```bash
   npm init -y
   npm install whatsapp-web.js qrcode-terminal
   ```

## ⚙️ Configurando o bot

1. Crie um arquivo chamado `index.js` e coloque esse código básico nele:

   ```javascript
   const { Client } = require('whatsapp-web.js');
   const qrcode = require('qrcode-terminal');

   const client = new Client();

   client.on('qr', (qr) => {
       qrcode.generate(qr, { small: true });
   });

   client.on('ready', () => {
       console.log('Bot está pronto!');
   });

   client.on('message', (message) => {
       console.log(message.body);
       // Aqui é onde você vai adicionar a lógica do seu bot!
   });

   client.initialize();
   ```

2. Rode o bot:
   ```bash
   node index.js
   ```

3. Use o WhatsApp no seu celular para escanear o QR Code que vai aparecer no terminal.

## 📚 Documentação

A habilidade mais importante de um desenvolvedor é saber pesquisar e ler documentações. Leia a documentação oficial do whatsapp-web.js. É lá que você vai encontrar todas as informações necessárias para desenvolver seu bot:

[Documentação do whatsapp-web.js](https://docs.wwebjs.dev/)

## 🧪 Seu desafio
Agora é com você! Use a documentação para adicionar funcionalidades ao seu bot. Algumas ideias:
- Fazer o bot responder **Apenas** quando receber uma mensagem minha
- Implementar respostas com botões para interação mais dinâmica
- Criar um comando para o bot enviar uma imagem

Lembre-se: a chave para o sucesso é a prática e a pesquisa. Boa sorte e divirta-se aprendendo!