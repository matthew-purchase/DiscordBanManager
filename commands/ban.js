const Discord = require("discord.js");
const rulesfile = require("../rules.json");

exports.run = (client, message, args) => {
  function banUser(BanNum) {
      let banReason = rule_array[BanNum-1]
      try { 
          User.ban({
              reason: `Broke the rule "${banReason}"`
          })
      } catch (e) {
          console.error(e)
      } finally {
          message.author.send(`${User} was banned for \`${banReason}\``)
          console.log(`${message.author.tag} banned ${User.tag} for ${banReason}`)
      }
  }

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
  let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if (!User) return message.channel.send("You must ping a user.")
  if (User.hasPermission("BAN_MEMBERS")) return message.reply("I cannot ban this user.")
  message.author.createDM().then(dmchannel => {
    var server_rules = rulesfile.servers[message.guild.id]["rules"].toString()
    rule_array = server_rules.split('\n');
    for (i = 0; i < rule_array.length; i++) {
      if (i == 0) {
        var rulemessage = `Rule ${i + 1}: ${rule_array[i]}\n`
      } else {
        var rulemessage = rulemessage + `Rule ${i + 1}: ${rule_array[i]}\n`
      }
    }
      dmchannel.send(`What rule did the user break to be banned? \`\`\`\n${rulemessage}\`\`\``)
      const filter = m => m.content.includes("");
      const collector = dmchannel.createMessageCollector(filter, {
          time: 20000
      });
      collector.on('collect', dmmessage => {
        if (dmmessage.author.bot) return;
        const regex = /[1-9]/g;
        const found = (dmmessage.content).match(regex);
        if (found && found <= i) {
          banUser(found[0]) 
        }
      })
  })
}