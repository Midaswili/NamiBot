const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Guild } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Replies with user info!')
        .addUserOption(option => option.setName('target').setDescription('Select a user')),
	async execute(interaction) {
        let member = interaction.options.getMember('target');
        if(!member) member = interaction.member
        let nickname = member.user.nickname
        if(!nickname) nickname = member.user.tag

        let allRoles;
        member.roles.cache.map((role) => allRoles = allRoles+ role + ", ")
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setAuthor({ name: member.user.tag, iconURL: member.displayAvatarURL()})
            .setDescription(`<@${member.user.id}>`)
            .setThumbnail(member.user.displayAvatarURL())
            .addField('ID', member.user.id, true)
            .addField('\u200b', '\u200b', true)
            .addField('Nickname', nickname, true)
            .addField('Created', ""+ member.user.createdAt.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric'}))
            .addField('Joined', ""+member.joinedAt.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric'}), true)       
            .addField("Roles:", member.roles.cache.map(roles =>`${roles}`).join(', '))
            .setTimestamp()
            .setFooter({ text: 'Nami', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            await interaction.reply(({ embeds: [exampleEmbed] }));
            },
};
/*

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Replies with user info!')
        .addUserOption(option => option.setName('target').setDescription('Select a user')),
	async execute(interaction) {
        const user = interaction.options.getUser('target');
        if(user){return interaction.reply("Username: " + user.username + " ID:" + user.id);}
        else{return interaction.reply(" username: " + interaction.user.username + " ID:" + interaction.user.id);}
	},
};*/