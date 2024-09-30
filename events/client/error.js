const chalk = require('chalk');
const logger = require('../../structures/logger')

module.exports = async (client) => {
    logger.error(`${client.user.tag} (${client.user.id})`);
};
