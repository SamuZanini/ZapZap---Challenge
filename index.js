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