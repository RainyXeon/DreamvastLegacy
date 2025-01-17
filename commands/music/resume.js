const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');
const logger = require('../../structures/logger')


module.exports = { 
    config: {
        name: "resume",
        aliases: ["r"],
        description: "Makes the bot pause/resume the music currently playing.",
        accessableby: "Member",
        category: "music",
    },
    run: async (client, message, args) => {
        const msg = await message.channel.send('Loading please wait...');

		const player = client.manager.get(message.guild.id);
		if (!player) return msg.edit("No song/s currently playing within this guild.");
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return msg.edit("You need to be in a same/voice channel.")
        
        await player.pause(player.playing);

        const embed = new MessageEmbed()
            .setDescription(`\`⏯\` | **Song has been:** \`${player.playing ? "Resumed" : "Paused"}\``)
            .setColor('#000001');

        msg.edit({ content: " ", embeds: [embed] });
            logger.info(`[Command/Logger] ${player.playing ? "Resumed" : "Paused"} used by ${message.author.tag} from ${message.guild.name}`)
    }
}