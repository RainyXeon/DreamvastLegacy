const chalk = require("chalk");
const logger = require('../../structures/logger')

module.exports = async (client, player) => {
	logger.info(`Player Destroyed from [GUILDID] ${player.guild}`);
}