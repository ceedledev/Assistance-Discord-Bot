const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const config = require("./config.js")

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommands(bot)

bot.on("messageCreate", async message => {

if(message.content === "!ping") return bot.commands.get("ping").run(bot, message)
})

bot.on("ready", async () => {
console.log(`${bot.user.tag} and online!`)
})
