const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.reply(`Pong! Time Taken: \`${client.ws.ping}ms\``);
}