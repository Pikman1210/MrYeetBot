const { SlashCommandBuilder } = require('discord.js');
const messageCountSchema = require('../storages/message-count-schema');
// const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('messages')
		.setDescription("Tells how many messages you've sent (in servers Mr Yeet is in) -dev")
        .addUserOption(option =>
			option.setName('user')
				.setDescription('Who to call stupid')
                .setRequired(false)),
	async execute(interaction) {
        try {
            const targetUser = interaction.options.getUser('user');

            if (targetUser === null) {
                const username = interaction.user.id
                const messageAmountObject = await messageCountSchema.findById({_id: username})
    
                let messageAmountInteger = messageAmountObject.messageCount;
                let messageAmount = messageAmountInteger.toString();
    
                if (messageAmount === 'null' || messageAmount === 0 || messageAmount === '0' || messageAmount === 'undefined') {
                    interaction.reply('You\'ve sent no messages in servers I am in, better get chatting!');
                    return;
                }
    
                interaction.reply(`You have sent **${messageAmount} messages** in servers I am in!`);   
            } else {
                const username = targetUser.id
                const targetName = targetUser.username
                const messageAmountObject = await messageCountSchema.findById({_id: username})
    
                let messageAmountInteger = messageAmountObject.messageCount;
                let messageAmount = messageAmountInteger.toString();
    
                if (messageAmount === 'null' || messageAmount === 0 || messageAmount === '0' || messageAmount === 'undefined') {
                    interaction.reply(`**${targetName}** has sent **no messages in servers I am in**, better get chatting!`);
                    return;
                }
    
                interaction.reply(`**${targetName}** has sent **${messageAmount} messages** in servers I am in!`);   
            }
	    	
        } catch(error) {
            console.error(`Error in message-count ${error}`);
            interaction.reply(`An error occured in command messages: ${error}`);
        }
	},
};