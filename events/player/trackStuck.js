const { MessageEmbed } = require("discord.js");
const logger = require('../../structures/logger')

module.exports = async (client, player, track, payload) => {
    const channel = client.channels.cache.get(player.textChannel);
    const embed = new MessageEmbed()
        .setColor("RED")
        .setDescription("\`❌\` | Song has stuck, auto leaving...");

    channel.send({embeds: [embed]});
    
    logger.error(`Error when loading song! Track is stuck in [${player.guild}]`);
    if (!player.voiceChannel) player.destroy();

}