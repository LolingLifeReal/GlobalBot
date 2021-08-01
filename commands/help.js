module.exports = {
    name: 'help',
    description: "This command shows all the comands",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#30D5C8")
            .setTitle("Here are the list of commands")
            .addField("Avatar", "```gAvatar @{Member}```")
            .addField("Spin (Admin Only)", "```gSpin```")
            .addField("Global Games", "```gRoblox```")
            .addField("Suggest", "```gSuggest {Suggestion}```")
            .addField("Global Survivor: Classic", "```gClassic```")
            .addField("Global Survivor: Hawaii", "```gHawaii```")
            .addField("Global Survivor: Murder Island", "```gMurderIsland```")
            .addField("Global Survivor: South Pole", "```gSouthPole```")
            .addField("Global Survivor: Wild West", "```gWildWest```")
            .addField("Global Survivor: DragRace", "```gDragRace```"
            .setDescription("The messages can be in uppercase or lower")
        
        
        message.author.send(newEmbed)
        message.channel.send('Sent to your dms!')
        
        
        console.log("Help was executed")

    }
}
