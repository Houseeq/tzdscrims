const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#E96D33")
    .setThumbnail(sicon)
    .addField("Server name", message.guild.name)
    .addField("Created at", message.guild.createdAt)
    .addField("You joined", message.member.joinedAt)
    .addField("Total members", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}