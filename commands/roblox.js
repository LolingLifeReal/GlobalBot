module.exports = {
    name: 'roblox',
    execute(message, args, Discord, client) {

        const RobloxEmbed = new Discord.MessageEmbed()
            .setTitle("Here are all of our games")
            .addField("Global Survivor: Classic", "\n\n\n https://www.roblox.com/games/6439796398/Global-Survivor-Classic? \n\n\n")
            .addField("Global Survivor: Hawaii", "\n\n\n https://www.roblox.com/games/6454408917/Global-Survivor-Hawaii \n\n\n")
            .addField("Global Survivor: Winner's Hall", "\n\n\n https://www.roblox.com/games/6445352622/Global-Survivor-Winners-Hall \n\n\n")
            .addField("Global Survivor: Murder Island", "\n\n\n https://www.roblox.com/games/6439842558/Global-Survivor-Murder-Island \n\n\n")
            .addField("Global Survivor: South Pole", "\n\n\n https://www.roblox.com/games/6439774225/Global-Survivor-South-Pole \n\n\n")
            .addField("Global Survivor: Wild West", "\n\n\n https://www.roblox.com/games/6736859835/Global-Survivor-Wild-West \n\n\n")
            .addField("Global Survivor: Homestore", "\n\n\n https://www.roblox.com/games/6736859835/Global-Survivor-Wild-West \n\n\n")
            

        message.channel.send(RobloxEmbed)
    }
}