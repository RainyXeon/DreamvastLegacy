const chalk = require("chalk");
const delay = require("delay");
const logger = require('../../structures/logger')

module.exports = async (client, node) => {
	await delay(4000);
	logger.info(`Node ${node.options.identifier} Connected`);
}