const { SlashCommandBuilder } = require('discord.js');
// const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('count')
		.setDescription('Counts up by 1 everytime the command is run. -dev'),
	async execute(interaction) {
		interaction.reply('temp');
	},
};