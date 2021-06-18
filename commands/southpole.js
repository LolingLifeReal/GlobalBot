moudle.exports = {
  name: "southpole",
  execute(message, args, Discord, client) {
    const RobloxEmbed = new Discord.MessageEmbed()
      .setColor("#30D5C8")
      .addField("Global Survivor: South Pole", "https://www.roblox.com/games/6439774225/Global-Survivor-South-Pole")
    message.channel.send(RobloxEmbed)
  }
}
