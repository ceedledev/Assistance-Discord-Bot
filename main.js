const Discord = require("discord.js")
const bot = new Discord.Client({intents: 3276799})
const config = require("./config.js")

bot.on("ready", async () => {
console.log(`${bot.user.tag} et bien en ligne !`)
})
bot.login(config.token)
