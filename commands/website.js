const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('website')
		.setDescription('Links to our website'),
	async execute(interaction) {
		interaction.reply('https://sites.google.com/view/mr-yeet-info/main')
	},
};