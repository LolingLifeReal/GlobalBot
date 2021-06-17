const Discord = require('discord.js');

const client = new Discord.Client;

client.commands = new Discord.Collection();

const fs = require('fs');

const prefix = ';';

require('dotenv').config();

// --------------------------------------------------------------------------------
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'purge') {
        client.commands.get('purge').execute(message, args, client, Discord)
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
    }
});


//-----------------------------------------------------------------------------------




client.on("ready", () => {
    console.log(`Dog Shit! ${client.user.tag}`)
    client.user.setActivity("Global Survivor!", { type: 'WATCHING', status: 'dnd' });
})



// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
client.login(process.env.token)