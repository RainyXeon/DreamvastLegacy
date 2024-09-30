const chalk = require("chalk");
const logger = require('../../structures/logger')


module.exports = async (client, id) => {
    logger.info(`Shard ${id} Shard reconnected!`);
}