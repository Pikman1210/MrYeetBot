const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wait')
		.setDescription('Mr Yeet is thinking!'),
	async execute(interaction) {
		await interaction.deferReply();
		await wait(4000);
		await interaction.editReply('You waited 4 seconds!');
	},
};