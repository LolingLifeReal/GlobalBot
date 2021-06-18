moudle.exports = {
  name: "murderisland"
execute(message, args, Discord, client) {
    const RobloxEmbed = new Discord.MessageEmbed()
      .setColor("#30D5C8")
      .addField("Global Survivor: Murder Island", "https://www.roblox.com/games/6439842558/Global-Survivor-Murder-Island")
      message.channel.send(RobloxEmbed)
  }
}
