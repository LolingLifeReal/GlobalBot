module.exports = {
  name: "hawaii",
execute(message, args, Discord, client) {
    const RobloxEmbed = new Discord.MessageEmbed()
      .setColor("#30D5C8")
      .addField("Global Survivor: Hawaii", "https://www.roblox.com/games/6454408917/Global-Survivor-Hawaii")
    message.channel.send(RobloxEmbed)
  }
}
