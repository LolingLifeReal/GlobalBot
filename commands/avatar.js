module.exports = {
    name: 'avatar',
    execute(message, args, Discord, client) {
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member;

        if (!target) return message.reply(`No User Mentioned !`)

        const AvEmbed = new Discord.MessageEmbed()

        
            .setImage(target.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setColor("#30D5C8")



        message.channel.send(AvEmbed)

        console.log("Avatar was executed")

    }
}