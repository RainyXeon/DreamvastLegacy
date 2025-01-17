const delay = require('delay');
const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');
const { doubletime } = require('../../config/filter')
const logger = require('../../structures/logger')

module.exports = { 
    config: {
        name: "doubletime",
        description: "Turning on doubletime filter",
        category: "filters",
        accessableby: "Member",
        aliases: []
    },

    run: async (client, message) => {
        const msg = await message.channel.send("Turning on **DoubleTime**. This may take a few seconds...");

        const player = client.manager.get(message.guild.id);
        if(!player) return msg.edit("No song/s currently playing in this guild.");
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return msg.edit("You need to be in a same/voice channel.")

        await player.setFilter('filters', doubletime);

        const embed = new MessageEmbed()
            .setAuthor({ name: "Turned on: DoubleTime", iconURL: 'https://cdn.discordapp.com/emojis/758423098885275748.gif'})
            .setColor('#000001');

        await delay(5000);
        msg.edit({ content: " ", embeds: [embed] });
            logger.info(`[Filters] DoubleTime used by ${message.author.tag} from ${message.guild.name}`);
   }
};