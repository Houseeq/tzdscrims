const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Command List Embed**")
    .addField("Bot Name", bot.user.username)
    .addField("The start commands are:", "```/solo``` starts a solo snipe. ```/duo``` starts a duo snipe. ```/squad``` starts a squad snipe.")
    .addField("The administrator commands are:", "```/commands``` brings up this embed. ```/serverinfo``` shows information about the server. ```/addrole``` adds a role that can access commands.")
    .setColor("#3948D1")
    .setThumbnail(bicon)
    .addField("Created at", bot.user.createdAt)
    .setFooter("Developed by House for TZD Scrims", "https://i.imgur.com/rIdYzZ1.png")

    message.channel.send(botembed);
    
}

module.exports.help = {
  name:"commands"
}
