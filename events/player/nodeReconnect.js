const chalk = require("chalk");
const logger = require('../../structures/logger')

module.exports = async (client, node) => {
	logger.info(`Node ${node.options.identifier} Reconnected`);
}