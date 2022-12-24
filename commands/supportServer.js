const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('support')
		.setDescription('Sends a link to join the support server'),
	async execute(interaction) {
		interaction.reply('https://discord.gg/wRhU6Rv');
	},
};