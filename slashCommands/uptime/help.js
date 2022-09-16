const {
    MessageEmbed,
    MessageActionRow,
    MessageSelectMenu
} = require("discord.js")
module.exports = {
    name: 'help',
    description: 'All commands',
    category: "info",

    run: async (client, interaction) => {

        const embed = new MessageEmbed()
            .setTitle(`${client.user.username}'s Commands`)
            .setDescription('Uptime is a free discord bot that hosts projects **24/7** online.')
            .addField(`Links:`, `[Youtube Channel](https://rebrand.ly/uo-dev) - [Discord Server](https://discord.gg/ndfEefv9aw) - [Uo#1428](https://uo1428.tk/)`, true)
            .setColor('GREEN')
      .setFooter(`Made with 💗,☕ by Uo#1428`, `https://media.discordapp.net/attachments/955500401279524894/994483825285541939/unknown.png`)

        const up = new MessageEmbed()
            .setTitle("Uptime Commands")
            .setColor('GREEN')
            .setDescription(`**add** - Adds monitor to your project.
**projects** - Shows all of your projects.
**remove** - Removes monitored projects from database.
**stats** - Shows Stats of all of your Projects.
**total** - Shows all projects.`)
            .setTimestamp();


        const general = new MessageEmbed()
            .setTitle("Info Commands")
          .setDescription(`**help** - Shows all commands of the bot
**info** - returns bot info
**invite** - invite me`)
            .setColor('GREEN')
            .setTimestamp();

        const components = (state) => [
            new MessageActionRow().addComponents(
                new MessageSelectMenu()
                .setCustomId("help-menu")
                .setPlaceholder("Please Select a Category")
                .setDisabled(state)
                .addOptions([{
                        label: `Uptime Commands`,
                        value: `up`,
                        emoji: `976859354168959037`
                    },
                    {
                        label: `General`,
                        value: `general`,
                        emoji: `953908584985559040`
                    }
                ])
            ),
        ];

        const initialMessage = await interaction.editReply({
            embeds: [embed],
            components: components(false)
        });

        const collector = interaction.channel.createMessageComponentCollector({
            filter: (b) => {
                if (b.user.id === interaction.member.user.id) return true;
                else {
                    // b.reply({
                    //     ephemeral: true,
                    //     content: `${fail} Only **${interaction.member.user.tag}** can use this menu`
                    // });
                    return false;
                };
            },
            componentType: "SELECT_MENU",
            time: 300000,
            idle: 300000 / 2
        });

        collector.on('collect', (interaction) => {
            if (interaction.values[0] === "up") {
                interaction.update({
                    embeds: [up],
                    components: components(false)
                });
            } else if (interaction.values[0] === "general") {
                interaction.update({
                    embeds: [general],
                    components: components(false)
                });
            }
        });
        collector.on('end', () => {
            initialMessage.edit({
                components: components(true)
            });
        })
    },
};