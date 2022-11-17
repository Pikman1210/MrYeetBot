const { SlashCommandBuilder } = require('discord.js');
require('dotenv/config');

const Owner_Id = process.env.OWNER_ID;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('developer_test')
		.setDescription('Checks if you\'re a dev'),
	async execute(interaction) {
        const userId = interaction.user.id

        if (userId === Owner_Id) {
            interaction.reply('Beans for my creator :D');
        } else {
            interaction.reply('No beans for non-creator D:');
        }
        
	},
};