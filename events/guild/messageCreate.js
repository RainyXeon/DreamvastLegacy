const { PREFIX } = require("../../config.json");

module.exports = async (client, message) => { 
  
if (message.author.bot) return;

    let args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(PREFIX)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) commandfile.run(client, message, args)
  
    if (message.channel.type === "dm" || !message.guild) {
   try {
    const embed = new Discord.MessageEmbed()
     .setTitle(":thinking: Hmm?")
     .setColor("RANDOM")
     .setDescription("Why Did you DM Me? I Can Only Respond To Commands On Servers. ;<")
     .setTimestamp()
     .setFooter("Thanks For Using Me! :)");
    return message.author.send({ embeds: [embed] });
   } catch (err) {
    return;
   }
  }
}