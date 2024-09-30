const chalk = require('chalk');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const ms = require('pretty-ms');

module.exports = {
    config: {
        name: "botinfo",
        description: "Shows the Information of the Bot",
        usage: "botinfo",
        category: "utilities",
        accessableby: "Members",
        aliases: ["info", "about"]
    },
    run: async (client, message, args) => {

    const info = new MessageEmbed()
        .setTitle(client.user.tag + " Information")
        .addField('Uptime', `${ms(client.uptime)}`, true)
        .addField('WebSocket Ping', `${client.ws.ping}ms`, true)
        .addField('Memory', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
        .addField('Guild Count', `${client.guilds.cache.size} guilds`, true)
        .addField(`User Count`, `${client.users.cache.size} users`, true)
        .addField('Commands', `${client.commands.size} cmds`,true)
        .addField('Node', `${process.version} on ${process.platform} ${process.arch}`, true)
        .addField('Cached Data', `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`, true)
        .addField('Discord.js', `v13`, true)
        .setTimestamp()
        .setFooter({ text: "Hope you like me!" })
        .setColor("#3498DB");

const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel("Invite Me")
        .setStyle("LINK")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
    )
  
    await message.channel.send({ embeds: [info], components: [row] });
            
    }
};