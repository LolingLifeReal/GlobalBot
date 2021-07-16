module.exports = {
    name: 'suggest',
    execute(message, args, Discord, client) {
        const channel = message.guild.channels.cache.find(c => c.name === '》suggestions');
        if (!channel) return message.channel.send('`》suggestions` channel does not exist!');


        if (!args[0]) return message.channel.send("Please put your suggestion!")
        if (args[0].length < 1) return message.channel.send("Please put your suggestion!")

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
            .setColor('#30D5C8')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs);

        channel.send(embed).then((msg) => {
            msg.react('<a:Tick:865695136616022046>');
            msg.react('<a:Xmark:865695136688242729>');
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}
