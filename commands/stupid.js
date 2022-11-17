const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stupid')
		.setDescription('Calls someone stupid')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('Who to call stupid')
                .setRequired(true)),
	async execute(interaction) {
			const targetUser = interaction.options.getUser('user');
			const targetName = targetUser.username
			await interaction.reply(`**${targetName}** is incredibly stupid`);
	},
};