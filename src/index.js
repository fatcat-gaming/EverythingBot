require('dotenv').config();
const {Client, Events, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permissions} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on(Events.ClientReady,  (x) => {
    console.log(`${x.user.tag} is ready`);
    client.user.setActivity('/ping');

    const ping = new SlashCommandBuilder()
    .setName ('ping')
    .setDescription('Play a game of ping pong!');

    const hello = new SlashCommandBuilder()
    .setName ('hello')
    .setDescription('This is a hello command')
    .addUserOption(option => 
        option
        .setName('user')
        .setDescription('The user to say hello to')
        .setRequired(false)
        )

    const add = new SlashCommandBuilder()
    .setName ('add')
    .setDescription('Ask the bot to add any two numbers!')
    .addNumberOption(option =>
        option
        .setName('first_number')
        .setDescription('This will be the first number')
        .setRequired(true)
        )
    .addNumberOption(option =>
         option
        .setName('second_number')
        .setDescription('This will be the second number')
        .setRequired(true)
        )

    client.application.commands.create(ping);
    client.application.commands.create(hello);
    client.application.commands.create(add);
});

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='ping') {
        interaction.reply('Pong!');
    }
    if(interaction.commandName==='hello') {
        const userOption = interaction.options.getUser('user');
        if(userOption){
            interaction.reply(`Hello, ${userOption.toString()}!`)
        }
        else{
            interaction.reply('Hello');
        }
    }


    if(interaction.commandName==='add') {
        const firstNumber = interaction.options.getNumber('first_number');
        const secondNumber = interaction.options.getNumber('second_number');

        if(isNaN(firstNumber) || isNaN(secondNumber)) {
            interaction.reply('Please enter a valid number!');
        }
        else{
            const result = firstNumber + secondNumber;
            interaction.reply(`The sum of ${firstNumber} and ${secondNumber} is ${result}.`);
        }
    }

});

client.login(process.env.TOKEN);
