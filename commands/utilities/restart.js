const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');
const { ownerid } = require('../../config.json');
const logger = require('../../structures/logger')


module.exports = {
    config: {
        name: "restart",
        description: "shuts down the client!",
        usage: "shutdown",
        category: "utilities",
        accessableby: "client Owner",
        aliases: ["stopbot"]
    },
    run: async (client, message, args) => {
    if(message.author.id != ownerid) return message.channel.send("Only the Bot Owner's Can Run this Command!")

    const restart = new MessageEmbed()
        .setDescription("**Account has been**: `Shutting down...`")
        .setColor("#000001");

    await message.channel.send({ embeds: [restart] });
        logger.warn(`Restarting...`);
            
    process.exit();
    }
};