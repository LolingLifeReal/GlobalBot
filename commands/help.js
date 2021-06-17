module.exports = {
    name: 'help',
    description: "This command shows all the comands",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Here are the list of commands")
        .addField("Ping", `;Ping`)
        .addField("Purge", `;Purge {Amount}`)
        .setDescription("The messages can be in uppercase or lower")
        message.author.send(newEmbed)
        message.channel.send('Sent to your dms!')
        console.log("Help was executed")   

    }
}