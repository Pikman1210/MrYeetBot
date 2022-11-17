/* eslint-disable indent */
const { SlashCommandBuilder } = require('discord.js');
// const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Makes the bot respond with whatever you input')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to respond back with')
                .setRequired(true))
		.addBooleanOption(option =>
			option.setName('private')
				.setDescription('Whether or not only you can see the response')),
	async execute(interaction) {
		const input = interaction.options.getString('input');
        const private = interaction.options.getBoolean('private') ?? false;

        interaction.reply({ content: input, ephemeral: private });
	},
};