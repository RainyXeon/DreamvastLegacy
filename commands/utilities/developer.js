const chalk = require('chalk');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    config: {
        name: "developer",
        description: "Shows the information about the Developer",
        usage: "developer",
        category: "utilities",
        accessableby: "Members",
        aliases: ["dev"]
    },
    run: async (client, message, args) => {

    const hpriyam = new MessageEmbed()
        .setTitle("HPRIYAM/XeonDex | I'm just remake from HPRIYAM")
        .setDescription("This is a remade music bot with added features. Special thanks to HPRIYAM.")
        .setFooter({ text: "Consider Joining the server or Inviting the Bot :) This would help me alot!" })
        .setColor("#3498DB");

const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel("Github (HPRIYAM)")
        .setStyle("LINK")
        .setURL("https://github.com/hpriyam8")
    )
    .addComponents(
      new MessageButton()
        .setLabel("Github (XeonDex)")
        .setStyle("LINK")
        .setURL("https://github.com/XeonE52680v3")
    )

  
    await message.channel.send({ embeds: [hpriyam], components: [row] });
            
    }
};