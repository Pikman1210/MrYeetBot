const { SlashCommandBuilder } = require('discord.js');
require('dotenv/config');

const Owner_Id = process.env.OWNER_ID;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shutdown')
		.setDescription('Shutsdown the bot'),
	async execute(interaction) {
		const userId = interaction.user.id

        if (userId === Owner_Id) {
            await interaction.reply({ content: 'Shutting down', ephemeral: true });
			process.exit();
        } else {
            
        }
	},
};