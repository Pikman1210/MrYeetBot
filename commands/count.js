const { SlashCommandBuilder } = require('discord.js');
const countCommandSchema = require('../storages/count-command-schema.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('count')
		.setDescription('Counts up by 1 everytime the command is run.'),
	async execute(interaction) {
		try {
			await countCommandSchema.findByIdAndUpdate({
				_id: 'countCommand'
			}, {
				_id: 'countCommand',
				$inc: {
					currentNumber: 1,
				}
			}, {
				// creates in database, if it exists updates it
				upsert: true
			});
	
			const currentNumberObject = await countCommandSchema.findById({_id: 'countCommand'});
			let currentNumberInteger = currentNumberObject.currentNumber;
			let currentNumber = currentNumberInteger.toString();
	
			interaction.reply(`This command has been run **${currentNumber} times!**`);
		} catch (error) {

			console.error(`Error in count ${error}`);
            interaction.reply(`An error occured in command count: ${error}`);
		}
		
	},
};