const { SlashCommandBuilder } = require('discord.js');

let emojis = ['👍', '👋', '😢', '😋', '🙄', '<:like:766071289281773579>', '<:poggers:765965119535710278>', '👀', '<:emoji_22:763778074541817867>',
	'<:Diamond:763508282219692043>', '❓', '😆', '❌', '😵', '✅', '😳', '😄', '<:happyblob:765957780687159366>', '😠', '<:DiscordEmoji1:767476084735213618>',
	'<:DiscordEmoji2:767476084740063242>', '<:DiscordEmoji3:767476083754663967>', '<:questionmark:765565193408610314>',
	'👧', '🧒', '👦', '👩', '🧑', '👨', '🧑‍🦱', '👩‍🦱', '👨‍🦱', '👶', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶',
	'😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🥱', '🤫', '😶', '🤥', '😐', '😑', '😬', '🙄', '<:wooper_pog:769247331316138025>', '<:Teehee2:769247512481234964>',
	'<:sad:769247676062498846>', '<:MrYEET:769248264318091264>', '<:help:768614301622861895>', '<:ConfusedFace:767421397324136488>',
	'<:7215_thonk:769247587655745587>', '<a:blobdance:769247375725821982>', '<a:BLACKGUY:769247424979533834>', '<:steaklol:773615979733188608>'];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('emoji')
		.setDescription('Sends a random emoji'),
	async execute(interaction) {
		emojis.sort(function(a, b) { return 0.5 - Math.random(); });
		var emoji = emojis[0];
		interaction.reply(emoji);
	},
};