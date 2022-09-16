const { Client, MessageActionRow, MessageButton, CommandInteraction } = require("discord.js");
const { botid } = require("../../config.json");

module.exports = {
  name: "invite",
  description: "invite me",
      ownerOnly: false,  
  run: async (client, message, args) => {
          
const row = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=960193514656919652&permissions=1392375101552&scope=bot%20applications.commands`)
        .setLabel("Invite")
        .setStyle("LINK")
    )
              const row1 = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://discord.gg/ndfEefv9aw`)
        .setLabel("Support Server")
            .setStyle("LINK")
    )
          const row2 = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://tinyurl.com/3jvb65tv`)
        .setLabel("Subscribe")
            .setStyle("LINK")
    )
          message.channel.send({ content: `<@${message.member.user.id}>`, components: [row, row2, row1] })
  }
}