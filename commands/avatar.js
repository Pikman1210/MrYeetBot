const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const chalk = require('chalk');
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Sends a picture of a user\'s current profile picture.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Who\'s avatar to send')
                .setRequired(false)),
    async execute(interaction) {
        const targetUser = interaction.options.getUser('user')

        if (targetUser === undefined || targetUser === null) {
            const canvas = Canvas.createCanvas(250, 250);
            const context = canvas.getContext('2d');

            const { body } = await request(interaction.user.displayAvatarURL({ extension: 'jpg' }));
            const avatar = await Canvas.loadImage(await body.arrayBuffer());
            context.drawImage(avatar, 0, 0, 250, 250);

            const attachment = new AttachmentBuilder(await canvas.encode('png', { name: 'profile-image.png' }));

            await interaction.reply({ content: `Here is the avatar of ${interaction.user.username}`, files: [attachment] });
        } else {
            const targetName = targetUser.username

            const canvas = Canvas.createCanvas(250, 250);
            const context = canvas.getContext('2d');

            const { body } = await request(targetUser.displayAvatarURL({ extension: 'jpg' }));
            const avatar = await Canvas.loadImage(await body.arrayBuffer());
            context.drawImage(avatar, 0, 0, 250, 250);

            const attachment = new AttachmentBuilder(await canvas.encode('png', { name: 'profile-image.png' }));

            await interaction.reply({ content: `Here is the avatar of ${targetName}`, files: [attachment] });
        }
    },
};