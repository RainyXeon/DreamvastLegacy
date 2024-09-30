const chalk = require("chalk");
const logger = require('../../structures/logger')

module.exports = async (client, id) => {
    logger.warn(`Shard ${id} Shard Disconnected!`);
}