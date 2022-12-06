const { SlashCommandBuilder } = require('discord.js');
const blockedUsersSchema = require('../storages/blocked-users-schema.js');
require('dotenv/config');

const Owner_Id = process.env.OWNER_ID;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blocked_users')
		.setDescription('Displays list of current blocked users')
        .addBooleanOption(option =>
			option.setName('ephemeral')
				.setDescription('Ephemeral or not')),
	async execute(interaction) {
        const userId = interaction.user.id
        const ephemeral = interaction.options.getBoolean('ephemeral') ?? true;

        if (userId === Owner_Id) {
            interaction.reply({ content: 'temp', ephemeral: ephemeral });
        } else {
            interaction.reply({ content: 'This is a **dev-only command** please do not try to use it.', ephemeral: true });
        }
        
	},
};