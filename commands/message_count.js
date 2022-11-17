const { SlashCommandBuilder } = require('discord.js');
const messageCountSchema = require('../storages/message-count-schema');
// const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('messages')
		.setDescription("Tells how many messages you've sent (in servers Mr Yeet is in) -dev"),
	async execute(interaction) {
        try {
            const messageAmount = await messageCountSchema.find({
                _id: interaction.user.id
            });


		    interaction.reply(`${messageAmount}`);
            console.log(messageAmount)
        } catch(error) {
            console.error(`Error in message-count ${error}`);
            interaction.reply(`An error occured in command messages: ${error}`);
        }
	},
};