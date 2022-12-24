const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('steak')
		.setDescription('Steak'),
	async execute(interaction) {
        const message = '***STEAK***'
        const attachment = './storages/images/why.png'
        await interaction.reply({ content: message, files: [attachment] });
	},
};