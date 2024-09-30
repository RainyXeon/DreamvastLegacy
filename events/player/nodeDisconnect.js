const chalk = require("chalk");
const logger = require('../../structures/logger')

module.exports = async (client, node, reason) => {
	logger.error(`Node ${node.options.identifier} Disconnected: ${reason}`);
}