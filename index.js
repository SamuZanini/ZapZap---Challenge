const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot está pronto!');
});

client.on('message', async (message) => {
    console.log(message.body);

    try {
        // Declarando variaveis uso global
        const LowerCaseMessage = message.body.toLowerCase()
        const media = MessageMedia.fromFilePath('./chico.jpg')

        if (message.from !== "5512996508094@c.us") {
            return
        }

        switch (true) {
            case LowerCaseMessage.includes('oi') || LowerCaseMessage.includes('olá') || LowerCaseMessage.includes('boa tarde') || LowerCaseMessage.includes('boa noite'):
                message.reply('Olá! Sou o assistente chamado Ivo. Qual o seu nome?')
                break;
            case LowerCaseMessage.includes('francisco') || LowerCaseMessage.includes('chico') || LowerCaseMessage.includes('francis'):
                client.sendMessage(message.from, media, { caption: "Olá Francisco!" });
                break;
            default:
                message.reply('Desculpe, no momento só posso responder para o Chico. Tente novamente nas próximas versões!')
                break;
        }
    } catch (e) {
        console.log(e)

    }
});

client.initialize();