moudle.exports = {
  name: "wildwest",
  execute(message, args, Discord, client) {
    const RobloxEmbed = new Discord.MessageEmbed()
      .setColor("#30D5C8")
      .addField("Global Survivor: Wild West", "https://www.roblox.com/games/6736859835/Global-Survivor-Wild-West")
    message.channel.send(RobloxEmbed)
  }
}
