const Discord = require('discord.js');

const client = new Discord.Client;

client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();

const fs = require('fs');

const prefix = 'g';

require('dotenv').config();

// --------------------------------------------------------------------------------
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    client.commands.set(command.name, command);


    const clientshitt = client.commands
}
//---------------------------------------------------------------------------------------------

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord)
    } else if (command === "spin") {
        client.commands.get('spin').execute(Discord, client, message, args)
    } else if (command === 'av') {
        client.commands.get('avatar').execute(message, args, Discord, client)
    } else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args, Discord, client)
    } else if (command === 'roblox') {
        client.commands.get('roblox').execute(message, args, Discord, client)
    } else if (command === 'suggest') {
        client.commands.get('suggest').execute(message, args, Discord, client)
    } else if (command === 'hawaii') {
        client.commands.get('hawaii').execute(message, args, Discord, client)
    } else if (command === 'wildwest') {
        client.commands.get('wildwest').execute(message, args, Discord, client)
    } else if (command === 'classic') {
        client.commands.get('classic').execute(message, args, Discord, client)
    } else if (command === 'southpole') {
        client.commands.get('southpole').execute(message, args, Discord, client)
    } else if (command === 'murderisland') {
        client.commands.get('murderisland').execute(message, args, Discord, client)
    } else if (message.content === "gracie") {
        client.commands.get('gracie').execute(message, args, Discord, client)
    }
});


//-----------------------------------------------------------------------------------




client.on("ready", () => {
    console.log(`Dog Shit! ${client.user.tag}`)
    client.user.setActivity("Global Survivor! gHelp", { type: 'WATCHING', status: 'dnd' });
})



// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------



client.login(process.env.token)
