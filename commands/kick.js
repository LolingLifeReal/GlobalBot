module.exports = {
  name: 'kick',
  description: "This command kicks a member!",
  execute(message, args) {
    const target = message.mentions.users.first();
    if (message.member.hasPermission("KICK_MEMBERS")) {
      let member = message.mentions.members.first()
      if (!member) message.reply("Please Mention The User You Want To Kick!")
      else {
        member.kick().then(mem => {
          message.channel.send(`Kicked ${mem.user.username}!`)
        })
      }
    } else {
      message.reply("You Dont Have Permission To Do That!").then(msg => msg.delete({ timeout: 6000 }));
    }
  }
}