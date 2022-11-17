/* eslint-disable indent */
const { SlashCommandBuilder } = require('discord.js');
// const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stupid')
		.setDescription('Calls someone stupid')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('Who to call stupid')
                .setRequired(true)),
	async execute(interaction) {
        try {
			// const interactionUser = await interaction.guild.members.fetch(interaction.user.id)
			const targetUser = interaction.options.getUser('user');
			const targetName = targetUser.username
			await interaction.reply(`**${targetName}** is incredibly stupid`);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
			await interaction.reply(`Error executing ${interaction.commandName}, ${error}`);
		}
	},
};

// ${interaction.user.username}