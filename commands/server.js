const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const chalk = require('chalk');
const { request } = require('undici');
const applyText = require('../storages/functions/applyText_function.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		try {
			// the message itself
			message = `This server\'s name is **${interaction.guild.name}** and currently has **${interaction.guild.memberCount}** members.`;

			// setting up canvas (the image)
			const imageFile = './storages/images/nebula.jpg'

			const canvas = Canvas.createCanvas(700, 250);
			const context = canvas.getContext('2d');
			const background = await Canvas.loadImage(imageFile);

			// background
			context.drawImage(background, 0, 0, canvas.width, canvas.height);

			// small text above display name
			context.font = '28px sans-serif';
			context.fillStyle = '#ffffff';
			context.fillText('Server Name:', canvas.width / 2.5, canvas.height / 3.5);

			// text (username)
			context.font = applyText(canvas, `${interaction.guild.name}!`);
			context.fillStyle = '#ffffff';
			context.fillText(`${interaction.guild.name}!`, canvas.width / 2.5, canvas.height / 1.8);

			// border
			context.strokeStyle = '#0099ff';
			context.strokeRect(0, 0, canvas.width, canvas.height);

			// avatar
			// const icon = guild.iconURL({ dynamic: true });
			const { body } = await request(interaction.guild.iconURL({ extension: 'jpg' }));
			const icon = await Canvas.loadImage(await body.arrayBuffer());
			context.drawImage(icon, 25, 25, 200, 200);

			// cropping avatar into circle
			context.beginPath();
			context.arc(125, 125, 100, 0, Math.PI * 2, true);
			context.closePath();
			context.clip();

			// image file
			const attachment = new AttachmentBuilder(await canvas.encode('png', { name: 'server-image.png' }));

			await interaction.reply({ content: message, files: [attachment] });
		} catch (error) {
			console.error(chalk.redBright('COMMAND ERROR: USER'), error);
			interaction.reply(`An error occured in command user: ${error}`);
		}
	},
};