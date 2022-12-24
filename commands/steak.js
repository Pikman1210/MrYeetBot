const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('steak')
		.setDescription('Steak'),
	async execute(interaction) {
        const message = '***STEAK***'
		//const attachment = new AttachmentBuilder(await canvas.encode('png', { name: 'server-image.png' }));
        const attachment = './storages/images/why.png'
        await interaction.reply({ content: message, files: [attachment] });
	},
};