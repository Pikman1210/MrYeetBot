/* eslint-disable brace-style */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const { REST, Routes } = require('discord.js');
require('dotenv/config');
const TOKEN = process.env.MR_YEET_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const fs = require('node:fs');

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandFilesWithDev = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFilesWithDev)
// var arr = ["count.js", "wait.js", "test_dev.js"];      
let endsWith = "_dev.js"
let regx = new RegExp(endsWith+"$");
let commandFiles = commandFilesWithDev.filter(function(item){return !regx.test(item);})
console.log(commandFiles);

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(TOKEN);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(CLIENT_ID),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands globally.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();