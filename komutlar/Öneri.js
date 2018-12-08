
const Discord = require('discord.js');


exports.run = function (client, message, args) {

    var öneri = args.slice(0).join(' ');
    var guildID = "520891345007542274";
    var channelID = "520893723937210379";

    if (!öneri) {
        return message.reply("** Doğru kullanım: m!öneri <mesaj>**");
    } else {

        var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)

        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.");
    };


};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["öner"],
    permLevel: 0
};

exports.help = {
    name: 'öneri',
    description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
    usage: 'öneri <mesaj>'
};