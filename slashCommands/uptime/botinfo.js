const { MessageEmbed, MessageActionRow, MessageButton, CommandInteraction } = require("discord.js");
const Discord = require("discord.js");
let os = require("os");
const { owners, botid } = require("../../config.json");
const { version: djsversion } = require('discord.js');
const { version } = require('../../package.json');
const { connection } = require("mongoose");
module.exports = {
  name: "info",
  description: "returns bot info",
  ownerOnly: false,
  run: async (client, interaction, args) => {
        await client.user.fetch();
    await client.application.fetch();
    const status = ["Disconnected","Connected","Connecting","Disconnecting"];
    
          const owner = owners;
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

    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
             let devs = []
    owner.map(r => devs.push(r));
            const getChannelTypeSize = (type) => client.channels.cache.filter((channel) => type.includes(channel.type)).size;

    const bioEmbed = new MessageEmbed()
      .setTitle(`Bio`)
.setDescription(interaction.client.application?.description)
    .setColor(`GREEN`)

         const infoEmbed = new MessageEmbed()
          // .setAuthor({
          //   name: `${client.user.username}`,
          //   iconURL: client.user.avatarURL(),
          // })
          .setColor(`GREEN`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: "👩🏻‍🔧 Client", value: client.user.tag, inline: true },
                { name: "📆 Created", value: `<t:${parseInt(client.user.createdTimestamp / 1000)}:R>`, inline: true },
                { name: "☑ Verified", value: client.user.flags.has("VERIFIED_BOT") ? "Yes" : "No", inline: true },
                { name: "👩🏻‍💻 Owner", value: "Uo#1428", inline: true },
                { name: "📚 Database", value: status[connection.readyState], inline: true },
                { name: "🖥 System", value: os.type().replace("Windows_NT", "Windows").replace("Darwin", "macOS"), inline: true },
                { name: "🧠 CPU Model", value: `${os.cpus()[0].model}`, inline: true },
                { name: "💾 CPU Usage", value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}%`, inline: true },
                { name: "⏰ Up Since", value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true },
                { name: "👩🏻‍🔧 Node.js", value: process.version, inline: true },
                { name: "🛠 Discord.js", value: version, inline: true },
                { name: "🏓 Ping", value: `${client.ws.ping}ms`, inline: true },
                { name: "🤹🏻‍♀️ Commands", value: `8+`, inline: true },
                { name: "🌍 Servers", value: `${client.guilds.cache.size}`, inline: true },
                { name: "👨‍👩‍👧‍👦 Users", value: `${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}`, inline: true },
                { name: "💬 Text Channels", value: `${getChannelTypeSize(["GUILD_TEXT", "GUILD_NEWS"])}`, inline: true },
                { name: "🎤 Voice Channels", value: `${getChannelTypeSize(["GUILD_VOICE", "GUILD_STAGE_VOICE"])}`, inline: true },
                { name: "🧵 Threads", value: `${getChannelTypeSize(["GUILD_THREAD", "GUILD_NEWS_THREAD", "GUILD_PUBLIC_THREAD", "GUILD_PRIVATE_THREAD"])}`, inline: true }
            );
   return interaction.followUp({ 
     ephemeral: true,
     components: [row, row2, row1],
     embeds: [infoEmbed, bioEmbed],
   })
  }
}
