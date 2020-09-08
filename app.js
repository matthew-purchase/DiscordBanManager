const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

const commands = new Discord.Collection()

fs.readdirSync('./commands').map((directory) => {
  fs.readdirSync(`./commands/${directory}/`).map((file) => {
      let CMD = require(`../commands/${directory}/${file}`)
      console.log(`Command ${CMD.name} loaded`)
      
      client.commands.set(CMD.name, CMD)
  })
})

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const lower = args.shift().toLowerCase();

  if (this.commands.has(lower)) {
    const commandFiles = this.commands.get(lower)
    //Run files in directories
    commandFiles.run(this, message, args)
  } 

});

client.login(config.token);