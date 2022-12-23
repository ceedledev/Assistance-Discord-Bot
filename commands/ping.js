const Discord = require("discord.js")

module.exports = {

   name: "ping",
   description: "Display latency",
   permission: "Any",
   dm: true,

   async run(bot, message) {

        await message.reply(`Ping : \`${bot.ws.ping}\``)
   }
}
