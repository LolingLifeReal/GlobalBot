module.exports = {
  name: 'ban',
  description: "This command bans a member!",
  execute(message, args) {
    const target = message.mentions.users.first();
    if (message.member.hasPermission("BAN_MEMBERS")) {
      let member = message.mentions.members.first()
      if (!member) message.reply("Please Mention The User You Want To Ban!")
      else {
        member.ban().then(mem => {
          message.channel.send(`Banned ${mem.user.username}!`)
        })
      }
    } else {
      message.reply("You Dont Have Permission To Do That!").then(msg => msg.delete({ timeout: 6000 }));
    }
  }
}