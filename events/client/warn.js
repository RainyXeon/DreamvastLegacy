const chalk = require('chalk');
const logger = require('../../structures/logger')

module.exports = async (client) => {
    logger.warn(`${client.user.tag} (${client.user.id})`);
};
