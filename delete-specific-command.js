const { REST, Routes } = require('discord.js');
require('dotenv/config');
const TOKEN = process.env.MR_YEET_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

// ID of command to delete
const command_id = '1042969342964416523';

const rest = new REST({ version: '10' }).setToken(TOKEN);

// for guild-based commands
rest.delete(Routes.applicationGuildCommand(CLIENT_ID, GUILD_ID, command_id))
	.then(() => console.log('Successfully deleted specific guild command.'))
	.catch(console.error);

// for global commands
rest.delete(Routes.applicationCommand(CLIENT_ID, command_id))
	.then(() => console.log('Successfully deleted specific application command'))
	.catch(console.error);

console.log(`Command ID: ${command_id}`);