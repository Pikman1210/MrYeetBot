const { Events } = require('discord.js');
const messageCountSchema = require('../storages/message-count-schema');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.content.startsWith('y!')) {
			await message.reply('Prefixed commands are now deprecated, please use slash (/) commands instead.');
		} else {
			await messageCountSchema.findByIdAndUpdate({
				_id: message.author.id
			}, {
				_id: message.author.id,
				$inc: {
					messageCount: 1,
				},
				$set: {
					displayName: message.member.displayName,
				}
			}, {
				// creates in database, if it exists updates it
				upsert: true
			})
		}
	},
};