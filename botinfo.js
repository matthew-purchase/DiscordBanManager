const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let icon = client.user.displayAvatarURL;
    let infoembed = new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setThumbnail(icon)
        .addField("Name", `${client.user.username}`, true)
        .addField("Owner", "MattHatesYou#4831 <@109092873860808704>", true)
        .addField("Servers", `🛡 ${client.guilds.cache.size}`, true)
        .addField("Channels", `📁 ${client.channels.cache.size}`, true)
        .addField("Users", `🚹 ${client.users.cache.size}`, true)
        .addField("Library", "Discord.js", true)
        .addField("Created On", client.user.createdAt, true)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
    message.channel.send(infoembed);
}