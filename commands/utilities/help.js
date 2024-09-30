const {
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
  Discord
} = require("discord.js");
const config = require("../../config.json");
const { PREFIX } = require("../../config.json");
const emoji = require("../../emojis.json");
const { readdirSync } = require("fs");
const { stripIndents } = require("common-tags");
const chalk = require("chalk");
const logger = require('../../structures/logger')


module.exports = {
  config: {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "(command)",
    category: "utilities",
    description: "Displays all commands that the bot has.",
    accessableby: "Members"
  },
      run: async (client, message, args) => {
      logger.info(`[Command/Logger] Help used by ${message.author.tag} from ${message.guild.name}`);

         if (args[0]) {
        const embed = new MessageEmbed()
        .setColor("#008dde");
        const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
        var cat = false;
        if (!cmd) {
          cat = client.categories.find(cat => cat.toLowerCase().includes(args[0].toLowerCase()))
        } 
        if (!cmd && (!cat || cat == null)) {
          embed.setColor("RED");
          embed.setDescription(`Nothing found for **${args[0].toLowerCase()}**`)
          return message.channel.send({embeds: [embed]});
        } else if (!cmd && cat) {
          var category = cat;

          const catcommands = client.commands.filter(x => x.category === category).map(x => '`' + x.name + '`').join(", ")

          const embed = new MessageEmbed()
          .setColor("#2F3136")
          .setDescription(`● To get help on a specific command type \`${prefix}help <command>\`!`)
          .setThumbnail(client.user.displayAvatarURL())
          .setTimestamp()
          .addField(`${emoji.categories[category]} **${category} - (${client.commands.filter((cmd) => cmd.category === category).size})**`, catcommands)
        
          return message.channel.send({embeds: [embed]})
        }
        if (cmd.name) embed.addField(`**Command name**`, `\`${cmd.name}\``);
        if (cmd.name) embed.setTitle(`Detailed Information of | \`${cmd.name}\``);
        if (cmd.description) embed.addField("**Description**", `\`${cmd.description}\``);
        if (cmd.aliases) try {
          embed.addField("**Aliases**", cmd.aliases.length > 0 ? cmd.aliases.map(a => "`" + a + "`").join("\n") : "No Aliases")
        } catch {}
        if (cmd.cooldown) embed.addField("**Cooldown**", `\`${cmd.cooldown} Seconds\``);
        else embed.addField("**Cooldown**", `\`3 Seconds\``);
        if (cmd.usage) {
          embed.addField("**Usage**", `\`${prefix}${cmd.usage}\``);
          embed.setFooter("Syntax: <> = required, [] = optional");
        }
        if (cmd.useage) {
          embed.addField("**Usage**", `\`${prefix}${cmd.useage}\``);
          embed.setFooter("**All-featured bot**");
        }
        embed.setColor("#008dde")
        return message.channel.send({embeds: [embed]});
      } 

        
    let helpmenu = new MessageEmbed()
        .setAuthor({ name: "RainyMusic" })
        .setDescription(`This is an all-featured bot called RainyMusic™.
 
**Links**
**[Support Server](Comming soon),**

**Command Catagory:**
** :headphones: \`:\` Filters**
** :shield:\`:\` Info Commands**
** :notes:\`:\` Music Commands**

**\`Choose A Catagory Below To See All Commands\`**`)

        .setFooter({ text: "Thanks for choosing me :)" })
        .setColor(`#008dde`)

        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('helpop')
                .setPlaceholder('Commands Menu')
             .addOptions([
      //          {
     //               label: 'Custom Playlist',
     //               description: 'Commands for creating custom playlist',
    //                value: 'first',
  //                  emoji: emoji.categories.Playlist
  //           },
                
                {
                    label: 'Filters',
                    description: 'Get All Filters Commands',
                    value: 'second',
                    emoji: emoji.categories.AstrozMusic
                },
                {
                    label: 'Info Commands',
                    description: 'Get All Info COMMANDS',
                    value: 'third',
                    emoji: emoji.categories.Info
                },
                {
                    label: 'Music Commands',
                    description: 'Get all Music Commands',
                    value: 'fourth',
                    emoji: emoji.categories.Playing
                },
            ])                        
        )

client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) return;
    
    let options = interaction.values;
    const funny = options[0]


    if(funny === 'second') {
        const embed2 = new MessageEmbed()
        .setThumbnail("https://i.ibb.co/vjpT66X/Rainy-Logo-removebg-preview.png")
        .addField(`:headphones: Filter - (23)`, `\`3d\`, \`bass\`, \`chipmunk\`, \`china\`, \`dance\`, \`darthvader\`, \`equalizer\`, \`nightcore\`, \`earrape\`, \`soft\`, \`slowmo\`, \`speed\`, \`tremolo\`, \`vibrato\`, \`vibrate\`, \`vibrato\`, \`superbass\`, \`pop\`, \`rate\`, \`treblepass\`, \`vaporwave\`, \`pitch\`, \`doubletime\`, \`reset\``)
        .setDescription("● To get help on a specific command type  (prefix)Music help <command>`!")
        .setColor('#008dde')
        .setFooter("RainyMusic")
        .setTimestamp()
        interaction.reply({ embeds: [embed2], ephemeral: true })
        return
    }

    if(funny === 'third') {
          const embed3 = new MessageEmbed()
        .setThumbnail("https://i.ibb.co/vjpT66X/Rainy-Logo-removebg-preview.png")
        .addField(`:shield: Info/Utility - (6)`, `\`developer\`, \`help\`, \`invite\`, \`ping\`, \`botinfo\`, \`restart\``)
        .setDescription("● To get help on a specific command type `(prefix)Music help <command>`!")
        .setColor('#008dde')
        .setFooter("RainyMusic")
        .setTimestamp()
        interaction.reply({ embeds: [embed3], ephemeral: true })
        return

    } 

    if(funny === 'fourth') {

         const embed4 = new MessageEmbed()
        .setThumbnail("https://i.ibb.co/vjpT66X/Rainy-Logo-removebg-preview.png")
        .addField(`:notes: Music - (19)`, `\`clear\`, \`forward\`, \`join\`, \`leave\`, \`loop\`, \`loopall\`, \`nowplaying\`, \`pause\`, \`play\`, \`queue\`, \`replay\`, \`resume\`, \`rewind\`, \`search\`, \`seek\`, \`shuffle\`, \`skip\`, \`skipto\`, \`volume\`, \`seek\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\``)
        .setDescription("● To get help on a specific command type `(prefix)Music help <command>`!")
        .setColor('#008dde')
        .setFooter("RainyMusic")
        .setTimestamp()
        interaction.reply({ embeds: [embed4], ephemeral: true })
        return

    }

})

        

        message.channel.send({ embeds: [helpmenu], components: [row] })
      
    }
}