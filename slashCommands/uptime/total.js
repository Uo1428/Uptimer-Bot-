const UrlsConfig = require("./../../database/models/UrlsConfig");
const { Client, MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "total",
  description: "Shows all projects",   
  ownerOnly: false,
  run: async (client, interaction, args) => {
    UrlsConfig.countDocuments(
      { authorID: interaction.member.user.id },
      async function (err, total) {        
        return interaction.followUp({ embeds: [new MessageEmbed().setTitle(`${client.user.username} Bot Total Projects `).setColor("GREEN").addField("Total Projects: ", `\`\`\`yml\n${client.projectsSize}\`\`\``, true).addField("Your Projects:", `\`\`\`yml\n${total}\`\`\``, true).setThumbnail(client.user.displayAvatarURL()).setFooter(`Made by Uo with love.`)] });
      }
    );
  },
};
