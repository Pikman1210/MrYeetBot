const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

let colors = [6950317, 0x0099FF, 0x42f557, 0x281be0, 0xe0d31b, 0xfc0000 ];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Information about the bot.'),
    async execute(interaction) {
        colors.sort(function (a, b) { return 0.5 - Math.random() })
        let color = colors[0];

        const embed = new EmbedBuilder()
            .setColor(color)
            .setTitle('Mr. Yeet Info')
            .setURL('https://sites.google.com/view/mr-yeet-info')
            .setAuthor({ name: 'Info', iconURL: 'https://cdn.discordapp.com/attachments/765558687933923338/765565097929343016/question_mark.png', url: 'https://sites.google.com/view/mr-yeet-info' })
            .setDescription('Various information about Mr. Yeet')
            // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: '**Version**', value: 'Version 3.0.0' },
                { name: '**Author**', value: 'I was made by Pikman1210! Check out her youtube channel [here!](https://www.youtube.com/channel/UCYkQIa52ZAz8gbO0Iuiwxsw)' },
                { name: '**Purpose**', value: 'No purpose, as most discord bots have.' },
            )
            // .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: '© Mr Yeet', iconURL: 'https://cdn.discordapp.com/attachments/719004415817809954/765325859841638430/Big_Brain_Default.jpg' });

        interaction.reply({ embeds: [embed] });
    },
};