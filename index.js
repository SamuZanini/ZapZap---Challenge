const { Client, MessageMedia } = require('whatsapp-web.js'); //add "buttons" if meta allow buttons again
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
        const mediaButton = MessageMedia.fromFilePath('./haha.jpg')
        
        /* not working anymore 
        const messageButton = 
            new Buttons(
                'Quer ver algo engraçado?',
                [
                    {id: '01', body: 'Sim'},
                    {id: '02', body: 'Não'},
                ],
                'Selecione uma opção',
                'Obrigado!'
            );
        */

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
            case LowerCaseMessage.includes('engraçado') || LowerCaseMessage.includes('piada'):
                client.sendMessage(message.from, mediaButton, { caption: "Claro, aí vai uma piada: Como dizia meu tio mudo..." }); 
            /* not working anymore 
            console.log("Tentando mandar botao")
                try {
                    await message.dynamicReplyButtons(messageButton);
                    console.log("Consegui manda o botao :3")
                }
                catch (err){
                    console.log("nao consegui manda o botao, erro: ", err)
                }
            */
                break;
            default:
                message.reply('Desculpe, no momento só posso responder para o Chico. Tente novamente nas próximas versões!')
                break;
        }

    } catch (e) {
        console.log(e)

    }

});

/* not working anymore 
client.on('message_create', async (message) => {
    if (message.type === 'buttons_response') {
        const selectedButton = message.selectedButtonId;
        const mediaButton = MessageMedia.fromFilePath('./haha.jpg')

        if (selectedButton === '01') {
            await client.sendMessage(message.from, mediaButton, { caption: `Gato Gojo 😸 hahaha`}); //\u{1F408}
        } else if (selectedButton === '02') {
            await client.sendMessage(message.from, 'Certo, quando quiser basta pedir!')
        }
    }
});
*/

client.initialize();