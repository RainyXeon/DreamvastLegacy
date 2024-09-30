const chalk = require('chalk');
const logger = require('../../structures/logger')

module.exports = async (client) => {
    logger.info(`(RECONNECTING] ${client.user.tag} (${client.user.id})`);
};
