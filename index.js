//===========================================================\\
//===================| Coded By Uo#1428 |====================\\
//==================| https://uo1428.tk/ |===================\\
//===========================================================\\
//=============| ΛLL IN ONΞ™ | Development </> |=============\\
//=============| https://discord.gg/pXRT2FusPb |=============\\
//===========================================================\\ 
require('dotenv').config();
const { Client, Collection } = require('discord.js');
const UrlsConfig = require('./database/models/UrlsConfig');
const fetchProjects = require('./fetchProjects');
const { timeout, disable_fetching } = require('./config.json');

const client = new Client({
	intents: 32767,
	disableEveryone: true
});
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require('./config.json');
require('./handler')(client);

(async () => {
	await require('./database/connect')();

	let pros = await UrlsConfig.find();
	client.projectsSize = 0;
	client.projects = pros.map(p => p.projectURL);

	UrlsConfig.countDocuments({}, async (err, total) => {
		client.projectsSize = total;

		if (!disable_fetching) fetchProjects(client.projects, client);
	});
})();

setInterval(async () => {
	UrlsConfig.countDocuments({}, (err, total) => {
		client.user.setActivity(
			`${total} Project(s) on ${client.guilds.cache.size} servers`,
			{
				type: 'WATCHING'
			}
		);
	});

	if (!disable_fetching) fetchProjects(client.projects, 
client);
}, timeout);


client.login(process.env.TOKEN);

const express = require('express');
const app = express();
const port = 4000 || 3000;

    app.all('/', (req, res) => {
  // res.setHeader('Content-Type', 'text/html');
  res.send(`<iframe src="https://discord.com/widget?id=925718661849817108&theme=dark" width="500" height="500" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" style="border-radius: 15px;text-align: center;-webkit-box-shadow: 0px 0px 1px 1px #000000, 0px 0px 4px 1px #000000, 0px 0px 10px 4px rgba(0,0,0,0.85), 0px 0px 10px 4px rgba(0,0,0,0.85); 
          box-shadow: 0px 0px 1px 1px #000000, 0px 0px 4px 1px #000000, 0px 0px 10px 4px rgba(0,0,0,0.85), 0px 0px 10px 4px rgba(0,0,0,0.85);"></iframe>
`);
  res.end();
});


app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));


client.on(`message`, message => {       
  const { MessageButton, MessageActionRow} = require(`discord.js`)
  let dash = new MessageButton()
    .setStyle("LINK")
    .setEmoji('981809089086644276')
    .setURL(`https://discord.gg/pXRT2FusPb`)
    
  let dash2 = new MessageButton()
    .setStyle("LINK")
    .setEmoji('975419311890002000')
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=960193514656919652&permissions=1392375101552&scope=bot%20applications.commands`)
    const buttons = new MessageActionRow()
    .addComponents(dash, dash2);
    if (message.content.startsWith(client.user)) {
  message.reply({
          content: `Hello ${message.author}! I am fully slash commands discord bot `,
    components: [buttons],          
 allowedMentions: {repliedUser: false}
});
}
});

//===========================================================\\
//===================| Coded By Uo#1428 |====================\\
//==================| https://uo1428.tk/ |===================\\
//===========================================================\\
//=============| ΛLL IN ONΞ™ | Development </> |=============\\
//=============| https://discord.gg/pXRT2FusPb |=============\\
//===========================================================\\ 