const UrlsConfig = require("./../../database/models/UrlsConfig");
const { Client, MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "total",
  description: "Shows all projects",
        ownerOnly: false,
  run: async (client, message, args) => {
    UrlsConfig.countDocuments(
      { authorID: message.member.user.id },
      async function (err, total) {        
        return message.channel.send({ embeds: [new MessageEmbed().setTitle(`<:uptime:976859354168959037> ${client.user.username} Bot Total Projects`).setColor("GREEN").addField("Total Projects: ", `\`\`\`yml\n${client.projectsSize}\`\`\``, true).addField("Your Projects:", `\`\`\`yml\n${total}\`\`\``, true).setThumbnail(client.user.displayAvatarURL()).setFooter(`Made with love by Uo.`)] });
      }
    );
  },
};
