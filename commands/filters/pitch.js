const delay = require('delay');
const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');
const { reset } = require('../../config/filter');
const logger = require('../../structures/logger')

module.exports = { 
    config: {
        name: "pitch",
        description: "Sets the pitch of the song.",
        category: "filters",
		accessableby: "Member",
		usage: '<pitch>',
        aliases: []
	},
	
	run: async (client, message, args) => {
        const player = client.manager.get(message.guild.id);
        if(!player) return message.channel.send("No song/s currently playing in this guild.");
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send("You need to be in a same/voice channel.")

		if (isNaN(args[0])) return message.channel.send('Amount must be a real number.');
		if (args[0] < 0) return message.channel.send('Pitch must be greater than 0.');
		if (args[0] > 10) return message.channel.send('Pitch must be less than 10.');

		await player.setFilter('filters', {
			timescale: { pitch: args[0] },
		});

		const msg = await message.channel.send(`Setting **Pitch** to **${args[0]}**. This may take a few seconds...`);
		const embed = new MessageEmbed()
			.setAuthor({ name: `Pitch set to: ${args[0]}`, iconURL: 'https://cdn.discordapp.com/emojis/758423098885275748.gif'})
			.setColor('#000001');
		await delay(5000);
		msg.edit({ content: " ", embeds: [embed] });
			logger.info(`[Filters] Pitch used by ${message.author.tag} from ${message.guild.name}`);
	}
};