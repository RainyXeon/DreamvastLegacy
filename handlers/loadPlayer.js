const chalk = require("chalk");
const delay = require("delay");
const { readdirSync } = require("fs");
const logger = require('../structures/logger')

module.exports = async (client) => {
    try {
        readdirSync("./events/player/").forEach(file => {
            const event = require(`../events/player/${file}`);
            let eventName = file.split(".")[0];
            client.manager.on(eventName, event.bind(null, client));
        });
    } catch (e) {
        console.log(e);
    }
    await delay(4000);
    logger.info(`Player Events Loaded | HPRIYAM OP/XeonDex`);
};
