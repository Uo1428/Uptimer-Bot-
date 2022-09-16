const { Client, MessageEmbed, Message, MessageActionRow,MessageButton } = require("discord.js");
const { prefix, botid } = require("./../../config.json");

module.exports = {
  name: "help",
  description: "Shows all commands of the bot",
  ownerOnly: false,
  run: async (client, message, args) => {
     const Discord = require("discord.js");
if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.SEND_MESSAGES)) return;
  console.log(`SEND_MESSAGES`);
if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.USE_EXTERNAL_EMOJIS))
                return message.reply({
                    content: `❌ I am missing the Permission to \`USE_EXTERNAL_EMOJIS\``})
if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.EMBED_LINKS))
                return message.reply({
                    content: `I am missing the Permission to \`EMBED_LINKS\``})
  if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES))
                return message.reply({
                    content: `I am missing the Permission to \`MANAGE_MESSAGES\``})
    
    let youtube_sub = "https://tinyurl.com/3jvb65tv ";
    const commands = client.commands
      .filter((c) => c.ownerOnly === false)
      .map((cmd) => `**${prefix}${cmd.name}** - ${cmd.description}`);

    const contents =
      `<:uptime:976859354168959037> ${client.user.username} is a free discord bot that hosts projects **24/7** online.\n\n` +
      commands.sort().join("\n");

    let embed = new MessageEmbed()
      .setTitle("Here are my commands")
      .setDescription(contents)
      .setColor("GREEN")
      .setFooter(`Prefix: "${prefix}"`)
      .setThumbnail(client.user.displayAvatarURL()) 
      .setTimestamp();
          
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

    return message.channel.send({ embeds: [embed], components: [row, row2, row1] });
  },
};
