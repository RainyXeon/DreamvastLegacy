const chalk = require('chalk');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    config: {
        name: "ping",
        description: "Shows the ping",
        usage: "ping",
        category: "utilities",
        accessableby: "Members",
        aliases: ["pingg"]
    },
    run: async (client, message, args) => {

    const ping = new MessageEmbed()
        .setTitle("**Ping of **" + client.user.username)
        .setDescription(`My Ping is ***${client.ws.ping}ms***`)
        .setTimestamp()
        .setColor("#3498DB");

const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel("Invite Me")
        .setStyle("LINK")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
    )
  
    await message.channel.send({ embeds: [ping], components: [row] });
            
    }
};