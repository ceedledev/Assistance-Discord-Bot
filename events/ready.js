const Discord = require("discord.js")
const loadSlashCommand = require("../modules/loadSlashCommands")

module.exports = async bot => {

await loadSlashCommand(bot)

console.log(`${bot.user.tag} and online!`)

}
