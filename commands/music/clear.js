const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');
const logger = require('../../structures/logger')

module.exports = { 
    config: {
        name: "clear",
        aliases: [],
        description: "Clear song in queue!",
        accessableby: "Member",
        category: "music",
        usage: "<input>"
    },
    run: async (client, message) => {
        const msg = await message.channel.send(`**Loading please wait...**`);

		const player = client.manager.get(message.guild.id);
		if (!player) return msg.edit("No song/s currently playing within this guild.");
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return msg.edit("You need to be in a same/voice channel.")

        player.queue.clear();
        
        const cleared = new MessageEmbed()
            .setDescription("\`📛\` | **Queue has been:** `Cleared`")
            .setColor('#000001');

        msg.edit({ content: " ", embeds: [cleared] });
            logger.info(`[Command/Logger] Clear used by ${message.author.tag} from ${message.guild.name}`);
    }
}