const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('confusion')
		.setDescription('Idk what to write here (get it (:)'),
	async execute(interaction) {
        //const message = '⠀';
        const message = null;
        const attachment = new AttachmentBuilder('./storages/images/tomato-sad.gif', { name: 'confusion.gif' });

		await interaction.reply({ content: message, files: [attachment] });
	},
};