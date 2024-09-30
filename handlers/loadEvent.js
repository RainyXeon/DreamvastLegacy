const delay = require('delay');
const chalk = require("chalk");
const { readdirSync } = require('fs');
const logger = require('../structures/logger')

module.exports = async (client) => {
    const loadcommand = dirs =>{
        const events = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of events) {
            const evt = require(`../events/${dirs}/${file}`);
            const eName = file.split('.')[0];
            client.on(eName, evt.bind(null, client));
        }
    };
    ["client", "guild"].forEach((x) => loadcommand(x));
    await delay(4000);
    logger.info(`Global Events Loaded | HPRIYAM OP/XeonDex`);
};