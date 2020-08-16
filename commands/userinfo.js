const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};

const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = (client, message, args) => {
  const member = message.guild.member(message.mentions.users.first()) ||  message.member;
  if (!member) return message.reply("Please provide a vaild Mention or USER ID");
  let bot;
  if (member.user.bot === true) {
    bot = "Yes";
  } else {
    bot = "No";
  }
  const embed = new Discord.MessageEmbed()
    .setColor(randomColor)
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL()}`)
    .addField("Status", `${status[member.user.presence.status]}`, true)
    .addField("Bot?", `${bot}`, true)
    .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Not playing a game"}`, false)
    .addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, false)
    .addField("Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, false)
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()
  message.channel.send({
    embed
  })
}