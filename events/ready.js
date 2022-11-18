const { Events, ActivityType } = require('discord.js');
const mongoose = require('mongoose');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		const servers = (client.guilds.cache.size);
		console.log(`Bot successfully connected, logged in as ${client.user.tag}, member of ${servers} servers`);
		setInterval(() => {
			const statuses = [
				'for new (/) commands',
				`${servers} servers`,
				'for commands!',
			];
	
			const status = statuses[Math.floor(Math.random() * statuses.length)];
			client.user.setPresence({
				activities: [{ name: status, type: ActivityType.Watching }],
				// status: 'beans',
			  });
			// client.user.setActivity(status, { type: 'WATCHING' }).catch(console.error);
		}, 60000);

		try {
			mongoose.connect(process.env.MONGO_URI, {
				keepAlive: true
			});
		} catch (error) {
			console.error(`Error connecting to mongodb. \n ${error}`);
			await client.destroy();
			process.exit();
		}
		
		// await wait(1000);
		console.log('Successfully connected to MongoDB');
	},
};