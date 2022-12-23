const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const config = require("./config.js")

bot.on("ready", async () => {
console.log(`${bot.user.tag} et bien en ligne !`)
})
bot.login(config.token)
