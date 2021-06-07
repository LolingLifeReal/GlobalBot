const Discord = require('discord.js');

const client = new Discord.Client;

client.commands = new Discord.Collection();

const fs = require('fs');

const prefix = ';';

require('dotenv').config();

// --------------------------------------------------------------------------------
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command  = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
    }else if(command === 'purge'){
        client.commands.get('purge').execute(message, args, client, Discord)
    }else if(command === 'kick'){
        client.commands.get('kick').execute(message, args, client, Discord)
    }else if(command === 'ban'){
        client.commands.get('ban').execute(message, args, client, Discord)
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord)
    }
});













client.on("ready", () => {
    console.log(`Dog Shit! ${client.user.tag}`)
})



// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
client.login(process.env.token)