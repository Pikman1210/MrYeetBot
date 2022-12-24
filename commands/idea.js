const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('idea')
		.setDescription('Links a form to send an idea'),
	async execute(interaction) {
		interaction.reply('https://forms.gle/UsiYWndy82VMMi2w6');
	},
};