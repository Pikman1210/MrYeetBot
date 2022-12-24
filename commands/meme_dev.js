const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const chalk = require('chalk');

let colors = [6950317, 0x0099FF, 0x42f557, 0x281be0, 0xe0d31b, 0xfc0000];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Sends a meme'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            colors.sort(function (a, b) { return 0.5 - Math.random() })
            let color = colors[0];

            fetch('https://meme-api.herokuapp.com/gimme')
                .then(res => res.json())
                .then(async json => {
                    const memeEmbed = new EmbedBuilder()
                        .setColor(color)
                        .setTitle(json.title)
                        .setImage(json.url)
                        .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`);
                    await interaction.editReply(memeEmbed);
                });
        } catch (error) {
            console.error(chalk.redBright('COMMAND ERROR: MEME'), error);
            interaction.editReply(`An error occured in command meme: ${error}`);
        }
    },
};

/*
const memeEmbed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`);
*/