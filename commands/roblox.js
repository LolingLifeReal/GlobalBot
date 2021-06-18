module.exports = {
    name: 'help',
    description: "This command shows all the comands",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#30D5C8")
            .setTitle("Here are the list of commands")
            .addField("Avatar", "```;Avatar @{Member}```")
            .addField("Spin (Admin Only)", "```;Spin```")
            .addField("Global Games", "```;Roblox```")
            .addField("Suggest", "```;Suggest {Suggestion}```")
            .addField("Global Survivor: Classic", "```;Classic```")
            .addField("Global Survivor: Hawaii", "```;Hawaii```")
            .addField("Global Survivor: Murder Island", "```;MurderIsland```")
            .addField("Global Survivor: South Pole", "```;SouthPole```")
            .addField("Global Survivor: Wild West", "```;WildWest```")
            .setDescription("The messages can be in uppercase or lower")
        message.author.send(newEmbed)
        message.channel.send('Sent to your dms!')
        console.log("Help was executed")

    }
}
