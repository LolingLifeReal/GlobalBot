module.exports = {
    name: "spin",
    description: "Spins booster prize",
    execute(Discord, client, message, args) {


        let i = ["**GFX**", "**Role**", "**Command**", "**Emoji**", "**DJ**"]

        let y = i[Math.floor(i.length * Math.random())]


        message.channel.send(`Your prize is... ${y}`)
    }
}