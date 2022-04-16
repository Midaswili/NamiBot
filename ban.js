const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Guild } = require('discord.js');
const { Permissions } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a user.')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for ban')),
	async execute(interaction) {
        let member = interaction.options.getMember('user');
        let reason = interaction.options.getString('reason');
        if(!reason) reason = "No reason given."
        if(interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS) && member.user.id != interaction.user.id){
            member.ban()
            const exampleEmbed = new MessageEmbed()
            .setColor('#ff3333')
            .setTitle(member.user.tag + " has been banned!")
            .addField('Reason', ""+reason, true)
            .addField("Banned By:", ""+interaction.user.tag)
            .setTimestamp()
            .setFooter({ text: 'Nami', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

            
            await interaction.reply(({ embeds: [exampleEmbed] }));
            }
            else if(member.user.id == interaction.user.id){
                await interaction.reply("You can't ban yourself!")
            }else if(!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)){
                await interaction.reply("You do not have permission to ban!")
            }
        }
        
};