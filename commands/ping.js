const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('See the bot\'s current latency and API latency.'),
	async execute(interaction) {
		try {
			const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
			interaction.editReply(`🏓 Pong! \nLatency is ${sent.createdTimestamp - interaction.createdTimestamp}ms. \nAPI Latency is ${Math.round(interaction.client.ws.ping)}ms`);
		} catch (error) {
			await interaction.reply(`Error executing command: ${error}`);
			console.log('Error executing ping');
			console.error(error);
		}
	},
};