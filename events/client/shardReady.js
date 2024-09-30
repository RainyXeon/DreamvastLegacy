const chalk = require("chalk");
const delay = require("delay");
const logger = require('../../structures/logger')

module.exports = async (client, id) => {
    await delay(4000);
    logger.info(`Shard ${id} Shard ready!`);
}