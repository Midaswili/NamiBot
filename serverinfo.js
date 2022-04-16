const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Guild } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Replies with server info!'),
	async execute(interaction) {
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL()})
            .setThumbnail(interaction.guild.iconURL())
            .addField('Owner', ""+`<@${interaction.guild.ownerId}>`, true)
            .addField("Server ID",""+interaction.guild.id, true)
            .addField('\u200b', '\u200b')
            .addField("Members", ""+interaction.guild.memberCount, true)
            .addField("Role", ""+interaction.guild.roles.cache.size, true)
            .addField("Created", interaction.guild.createdAt.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric'}))
            .setImage(interaction.guild.bannerURL())
            .setTimestamp()
            .setFooter({ text: 'Nami', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            await interaction.reply(({ embeds: [exampleEmbed] }));
            },
};