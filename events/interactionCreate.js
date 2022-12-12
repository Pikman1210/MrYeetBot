/* eslint-disable brace-style */
const { Events } = require('discord.js');
const chalk = require('chalk');
const blockedUsersSchema = require('../storages/blocked-users-schema.js');
require('dotenv/config');

const Owner_Id = process.env.OWNER_ID;

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		const userId = interaction.user.id;
		const blockedUsersObject = await blockedUsersSchema.findById({ _id: userId });
		if (userId === Owner_Id) {
			if (!interaction.isChatInputCommand()) return;

			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				interaction.reply(`No command matching **${interaction.commandName}** was found.`);
				return;
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(chalk.redBright('EVENT ERROR: INTERACTION_CREATE'), error);
			}
		} else {
			if (blockedUsersObject === null) {
				if (!interaction.isChatInputCommand()) return;

				const command = interaction.client.commands.get(interaction.commandName);

				if (!command) {
					console.error(chalk.red(`No command matching ${interaction.commandName} was found.`));
					interaction.reply(`No command matching **${interaction.commandName}** was found.`);
					return;
				}

				try {
					await command.execute(interaction);
				} catch (error) {
					console.error(chalk.redBright(`COMMAND EXECUTE ERROR: ${interaction.commandName}`), error);
				}
			} else {
				let userBlocked = blockedUsersObject.blocked;

				if (userBlocked === 'true') {
					interaction.reply('You are blocked from using this bot. Contact Pikman#1556 if you believe this is an error.');
					return;
				} else {
					if (!interaction.isChatInputCommand()) return;

					const command = interaction.client.commands.get(interaction.commandName);

					if (!command) {
						console.error(`No command matching ${interaction.commandName} was found.`);
						interaction.reply(`No command matching **${interaction.commandName}** was found.`);
						return;
					}

					try {
						await command.execute(interaction);
					} catch (error) {
						console.error(chalk.redBright(`COMMAND EXECUTE ERROR: ${interaction.commandName}`), error);
					}
				}
			}
		}
	},
};