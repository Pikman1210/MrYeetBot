const { SlashCommandBuilder } = require('discord.js');
const blockedUsersSchema = require('../storages/blocked-users-schema.js');
const clean = require('../storages/functions/clean_function.js');
require('dotenv/config');

const Owner_Id = process.env.OWNER_ID;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('eval')
        .setDescription('Runs inputed code. *VERY DANGEROUS* IF YOU RUN AND ARE NOT A DEV YOU WILL BE BLOCKED')
        .addStringOption(option =>
            option.setName('eval')
                .setDescription('Code to eval')
                .setRequired(true))
        .addBooleanOption(option =>
            option.setName('ephemeral')
                .setDescription('Ephemeral or not')),
    async execute(interaction) {
        try {
            const userId = interaction.user.id
            const code = interaction.options.getString('eval');
            const ephemeral = interaction.options.getBoolean('ephermeral') ?? false;
            const blockedUsersObject = await blockedUsersSchema.findById({ _id: userId });
            // error solution: if someone isnt warned or blocked, they dont show in the database so warned returns as null or undefined
            // so, add a giant if statement with all the other code inside it for if it is undefined/null
            if (blockedUsersObject === null) {
                if (userId === Owner_Id) {
                    try {
                        const evaled = eval(code);
                        const cleaned = await clean(evaled);

                        interaction.reply({ content: `\`\`\`js\n${cleaned}\n\`\`\``, ephemeral: ephemeral });
                    } catch (error) {
                        console.error(`Error in eval.js ${error}`);
                        interaction.reply(`An error occured in file eval.js:\n${error}`);
                    }
                } else {
                    await blockedUsersSchema.findByIdAndUpdate({
                        _id: userId
                    }, {
                        _id: userId,
                        $set: {
                            warned: 'true',
                            blocked: 'false',
                        }
                    }, {
                        upsert: true
                    });
                    await interaction.reply('This is a heavily restricted command. Do not attempt to use it again. **You have been warned**.');
                }
            } else if (blockedUsersObject.warned === 'false' || blockedUsersObject.warned === null || blockedUsersObject.warned === undefined || blockedUsersObject.warned === 'undefined') {
                if (userId === Owner_Id) {
                    try {
                        const evaled = eval(code);
                        const cleaned = await clean(evaled);

                        interaction.reply({ content: `\`\`\`js\n${cleaned}\n\`\`\``, ephemeral: ephemeral });
                    } catch (error) {
                        console.error(`Error in eval.js ${error}`);
                        interaction.reply(`An error occured in file eval.js:\n${error}`);
                    }
                } else {
                    await blockedUsersSchema.findByIdAndUpdate({
                        _id: userId
                    }, {
                        _id: userId,
                        $set: {
                            warned: 'true',
                            blocked: 'false',
                        }
                    }, {
                        upsert: true
                    });
                    await interaction.reply('This is a heavily restricted command. Do not attempt to use it again. **You have been warned**.');
                }
            } else if (blockedUsersObject.warned === 'true') {
                if (userId === Owner_Id) {
                    try {
                        interaction.reply({ content: 'Eval command not run due to Owner_Id being set as \"Warned\". Check database/command code immediately.', ephemeral: ephemeral })
                    } catch (error) {
                        console.error(`Error in eval.js ${error}`);
                        interaction.reply(`An error occured in file eval.js:\n${error}`);
                    }
                } else {
                    await blockedUsersSchema.findByIdAndUpdate({
                        _id: userId
                    }, {
                        _id: userId,
                        $set: {
                            blocked: 'true',
                            reason: 'Abused eval command',
                        }
                    }, {
                        upsert: true
                    });
                    await interaction.reply('Thank you for using this bot, unfortunately you have been blocked. Contact Pikman#1556 if you believe this was an error.');
                }
            } else {
                interaction.reply('Error in checking database or error in code, please check and report this to the devs.');
            }
            /*
            if (blockedUsersObject.warned === null) {
                let warned = 'true';
            } else {
                let blockedUsersInteger = blockedUsersObject.warned; // error here
                let warned = blockedUsersInteger.toString();
            }

            let warned = 'true';
            console.log(warned)

            if (userId === Owner_Id) {
                try {
                    const evaled = eval(code);
                    const cleaned = await clean(evaled);

                    interaction.reply({ content: `\`\`\`js\n${cleaned}\n\`\`\``, ephemeral: ephemeral });
                } catch (error) {
                    console.error(`Error in eval.js ${error}`);
                    interaction.reply(`An error occured in file eval.js:\n${error}`);
                }
            } else if (warned === 'true') {
                interaction.reply('you are marked as warned (temp)');
            } else {
                await blockedUsersSchema.findByIdAndUpdate({
                    _id: userId
                }, {
                    _id: userId,
                    $set: {
                        warned: 'true',
                    }
                }, {
                    upsert: true
                });
                await interaction.reply('This is a heavily restricted command. Do not attempt to use it again, **you have been warned**.');
            } */

        } catch (error) {
            console.error(`Error in eval.js ${error}`);
            interaction.reply(`An error occured in file eval.js:\n${error}`);
        }
    },
};