const Discord = require("discord.js")
const loadSlashCommand = require("../Loaders/loadSlashCommands")

module.exports = async bot => {

await loadSlashCommand(bot)

console.log(`${bot.user.tag} and online!`)

}
