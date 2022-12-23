const { SlashCommandBuilder } = require('discord.js');

let chance = ["You rolled 1! Very unlucky", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", 
"Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", 
"Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", 
"Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", 
"Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", 
"YOU WON! Congrats! You get nothing for now but you might later.", 
"Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", 
"Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", 
"Try again!", "*Try again!*", "**Try again!**", "***Try again!***", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", 
"Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "Try again!", "You rolled 100! Lucky, but you still lost", ];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chance')
		.setDescription('Roll the dice! 1 in 100'),
	async execute(interaction) {
		chance.sort(function (a, b) { return 0.5 - Math.random() })
        let result = chance[0];
        interaction.reply(result);
	},
};