const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => {
  let serverembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(message.guild.name)
    .addField("Name", message.guild.name, true)
    .addField("ID", message.guild.id, true)
    .addField("Owner", message.guild.owner, true)
    .addField("Region", message.guild.region, true)
    .addField("Verification Level", message.guild.verificationLevel, true)
    .addField("Members", `🚹 ${message.guild.memberCount}`, true)
    .addField("Roles", message.guild.roles.cache.size, true)
    .addField("Channels", message.guild.channels.cache.size, true)
    .addField("You Joined", moment.utc(message.member.joinedAt))
    .setFooter(`Created ${moment.utc(message.guild.createdAt)}`)
    .setTimestamp()
  message.channel.send(
    serverembed
  ); 
}