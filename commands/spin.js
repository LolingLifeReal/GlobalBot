module.exports = {
    name: "spin",
    description: "Spins booster prize",
    execute(Discord, client, message, args) {

        if (message.member.hasPermission("ADMINISTRATOR")) {


            let i = ["**GFX**", "**Role**", "**Command**", "**Emoji**", "**DJ**"]

            let y = i[Math.floor(i.length * Math.random())]

            const embedsss = new Discord.MessageEmbed()
            .setTitle(`Your prize is... ${y}`)
            .setColor("#30D5C8")

            message.channel.send(embedsss)
        }
    }
}