const figlet = require('figlet');
const { PREFIX } = require('../../config.json');
const chalk = require('chalk');

module.exports = async (client) => {
    client.manager.init(client.user.id);
    figlet(client.user.tag, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(chalk.red.bold(data));
    });

    let guilds = client.guilds.cache.size;
    let users = client.users.cache.size;
    let channels = client.channels.cache.size;

    const activities = [
		`with ${guilds} servers 
| ${PREFIX}help `,
        `${PREFIX}play + url | ${users} users!`,
    ]

    setInterval(() => {
        client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]}`, { type: "STREAMING", url: "https://www.twitch.tv/lofichillnight" });
    }, 10000)

};
