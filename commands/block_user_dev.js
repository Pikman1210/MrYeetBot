const { SlashCommandBuilder } = require('discord.js');
const chalk = require('chalk');
const blockedUsersSchema = require('../storages/blocked-users-schema.js');
require('dotenv/config');

const Owner_Id = process.env.OWNER_ID;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('block_user')
        .setDescription('Blocks someone from using the bot (use Id) -dev')
        .addStringOption(option =>
            option.setName('user_id')
                .setDescription('The input to respond back with')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for block')
                .setRequired(true)),
    async execute(interaction) {
        const userId = interaction.user.id
        const blockTarget = interaction.options.getString('user_id');
        const blockReason = interaction.options.getString('reason');

        if (userId === Owner_Id) {
            try {
                await blockedUsersSchema.findByIdAndUpdate({
                    _id: blockTarget
                }, {
                    _id: blockTarget,
                    $set: {
                        reason: blockReason,
                        blocked: 'true',
                    }
                }, {
                    // creates in database, if it exists updates it
                    upsert: true
                });
                interaction.reply(`**${blockTarget}** has been blocked from using the bot for reason: **${blockReason}**`);
            } catch (error) {
                console.error(chalk.redBright('COMMAND ERROR: BLOCK_USER'), error);
                interaction.reply(`An error occured in file block_user_dev.js:\n${error}`);
            }
        } else {
            interaction.reply({ content: 'This is a **dev-only command** please do not try to use it.', ephemeral: true });
        }

    },
};