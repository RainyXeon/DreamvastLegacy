const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');

module.exports = { 
    config: {
        name: "pause",
        aliases: ["pa"],
        description: "Makes the bot pause/resume the music currently playing.",
        accessableby: "Member",
        category: "music",
    },
    run: async (client, message, args) => {
        const msg = await message.channel.send(`**Loading please wait...**`);

        const player = client.manager.get(message.guild.id);
		if (!player) return msg.edit("No song/s currently playing within this guild.");
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return msg.edit("You need to be in a same/voice channel.")

        await player.pause(true);

        const embed = new MessageEmbed()
            .setDescription(`\`⏸\` | **Paused:** \`${channel.name}\` \n\n **Used by:** \`${message.author.tag}\``)
            .setColor('#000001');

        msg.edit({ content: " ", embeds: [embed] })
    }
}