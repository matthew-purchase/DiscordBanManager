const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const embed = {
    "color": 6440824,
    "footer": {
      "text": "Written by MattHatesYou#4831"
    },
    "author": {
      "name": "Ban Manager Help",
      "icon_url": "https://via.placeholder.com/800"
    },
    "fields": [
      {
        "name": "Q: What is Ban Manager?",
        "value": "A: Ban Manager is meant to be a simple solution to banning users from discord servers."
      },
      {
        "name": "Q: What are your commands?",
        "value": "Currently I am only able to test my connection, and ban users from discords."
      },
      {
        "name": "Q: How do I use it?",
        "value": "A: When you type **b!ban {user}**, I will DM you and you will select from a preset list of ban reasons."
      }
    ]
  };
  message.channel.send({ 
    embed 
  })
};