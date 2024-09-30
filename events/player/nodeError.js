const chalk = require("chalk");
const logger = require('../../structures/logger')

module.exports = async (client, node, error) => {
	logger.error(`Node ${node.options.identifier} Error: ${error}`);
}