const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Sends a link to add the bot to your server.'),
	async execute(interaction) {
		interaction.reply('https://discord.com/api/oauth2/authorize?client_id=709927096385798245&permissions=8&scope=bot')
	},
};