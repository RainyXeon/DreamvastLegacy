const chalk = require("chalk");
const logger = require('../../structures/logger')

module.exports = async (client, error, id) => {
    logger.error(`Shard ${id} Shard Errored!`);
}