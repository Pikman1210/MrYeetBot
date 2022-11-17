/* eslint-disable brace-style */
const { Events } = require('discord.js');
//const commandCountSchema = require();

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);
		
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			interaction.reply(`No command matching **${interaction.commandName}** was found.`);
			return;
		}
		
		try {
			await command.execute(interaction);

			/*
			// _id sets document id (basically its name under a schema)
			const commandAmount = await commandCountSchema.find({
                _id: interaction.user.id
            }); */
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};