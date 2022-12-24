const { SlashCommandBuilder } = require('discord.js');

let file = [
"./storages/images/Random-Image-Command/image1.jpg", 
"./storages/images/Random-Image-Command/image2.png", 
"./storages/images/Random-Image-Command/image3.png", 
"./storages/images/Random-Image-Command/image4.jpg", 
"./storages/images/Random-Image-Command/image5.png", 
"./storages/images/Random-Image-Command/image6.jpg", 
"./storages/images/Random-Image-Command/image7.gif", 
"./storages/images/Random-Image-Command/image8.jpg", 
"./storages/images/Random-Image-Command/image9.png", 
"./storages/images/Random-Image-Command/image10.jpg", 
"./storages/images/Random-Image-Command/image11.jpg", 
"./storages/images/Random-Image-Command/image12.png", 
"./storages/images/Random-Image-Command/image13.png", 
"./storages/images/Random-Image-Command/image14.jpg", 
"./storages/images/Random-Image-Command/image15.png", 
"./storages/images/Random-Image-Command/image16.jpg", 
"./storages/images/Random-Image-Command/image17.jpg", 
"./storages/images/Random-Image-Command/image18.jpeg", 
"./storages/images/Random-Image-Command/image19.gif", 
"./storages/images/Random-Image-Command/image20.gif", 
"./storages/images/Random-Image-Command/image21.png", 
"./storages/images/Random-Image-Command/image22.gif", 
"./storages/images/Random-Image-Command/image23.gif", 
"./storages/images/Random-Image-Command/image24.jpg"
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('image')
		.setDescription('Sends a random image'),
	async execute(interaction) {
        await interaction.deferReply();
		const message = null;
        file.sort(function (a, b) { return 0.5 - Math.random() })
        const attachment = file[0];
        await interaction.editReply({ content: message, files: [attachment] });
	},
};