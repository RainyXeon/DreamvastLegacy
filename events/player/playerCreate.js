const chalk = require("chalk");
const logger = require('../../structures/logger')

module.exports = async (client, player) => {
	logger.info(`Player Created from [GUILDID] ${player.guild}`);
}