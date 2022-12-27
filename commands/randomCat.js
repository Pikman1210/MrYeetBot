const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');
const chalk = require('chalk');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Sends a picture of a cat'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const catResult = await request('https://aws.random.cat/meow');
            const { file } = await catResult.body.json();

            interaction.editReply({ files: [file] });
        } catch (error) {
            console.error(chalk.redBright('COMMAND ERROR: CAT'), error);
            interaction.editReply(`An error occured in command cat: ${error}`);
        }
    },
};