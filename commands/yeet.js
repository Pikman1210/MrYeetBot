const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yeet')
		.setDescription('The best command'),
	async execute(interaction) {
		const message = null
        const attachment = './storages/images/YeetGIF.gif'
        await interaction.reply({ content: message, files: [attachment] });
	},
};