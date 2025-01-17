const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');
const logger = require('../../structures/logger')


module.exports = { 
    config: {
        name: "replay",
        aliases: [],
        description: "Replay current song!",
        accessableby: "Member",
        category: "music"
    },
    run: async (client, message) => {
        const msg = await message.channel.send(`**<a:915553548278841374:933831589362794496> Loading please wait...**`);

		const player = client.manager.get(message.guild.id);
		if (!player) return msg.edit("No song/s currently playing within this guild.");
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return msg.edit("You need to be in a same/voice channel.")

        await player.seek(0);

        const embed = new MessageEmbed()
            .setDescription("\`⏮\` | **Song has been:** `Replay`")
            .setColor('#000001');

        msg.edit({ content: " ", embeds: [embed] });
            logger.info(`[Command/Logger] Replay used by ${message.author.tag} from ${message.guild.name}`);
    }
}