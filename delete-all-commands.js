const { REST, Routes } = require('discord.js');
require('dotenv/config');
const TOKEN = process.env.MR_YEET_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

const rest = new REST({ version: '10' }).setToken(TOKEN);

// for global commands
rest.put(Routes.applicationCommands(CLIENT_ID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);