const { watchFile } = require("fs");

module.exports = {
    name: 'purge',
    permissions: ["MANAGE_MESSAGES",],
    description: "Clear messages",
    async execute(message, args, client, Discord) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            if (!args[0]) return message.reply("Please enter the amount of messages you want to clear!");
            if (isNaN(args[0])) return message.reply("please enter a real number!");

            if (args[0] > 501) return message.reply("You cannot delete more than 100 messages!");
            if (args[0] < 1) return message.reply("You must delete atleast one message!");
            message.delete();

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });
        } else {
            message.channel.send("You Don't have permission to use this command!").then(msg => msg.delete({ timeout: 5000 }));
        }
    },
};