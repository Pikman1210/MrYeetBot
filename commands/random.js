const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const chalk = require('chalk');

const a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '&', '.', '\'', '/'];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Sends a random 6 character sequence.'),
    async execute(interaction) {
        try {
            const message = 'Here\' your random 6 charatcer sequence!'

            const canvas = Canvas.createCanvas(700, 250);
            const ctx = canvas.getContext('2d');

            const background = await Canvas.loadImage('./storages/images/random-background.jpg');
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            ctx.font = '60px sans-serif';
            ctx.fillStyle = '#ffffff';

            const b = a[Math.floor(Math.random() * a.length)] + a[Math.floor(Math.random() * a.length)] + a[Math.floor(Math.random() * a.length)] + a[Math.floor(Math.random() * a.length)] + a[Math.floor(Math.random() * a.length)] + a[Math.floor(Math.random() * a.length)];
            ctx.fillText(b, canvas.width / 2.5, canvas.height / 2.2);

            const attachment = new AttachmentBuilder(await canvas.encode('png', { name: 'sequence.png' }));

            await interaction.reply({ content: message, files: [attachment] });
        } catch (error) {
            console.error(chalk.redBright('COMMAND ERROR: RANDOM'), error);
			interaction.reply(`An error occured in command random: ${error}`);
        }
    },
};