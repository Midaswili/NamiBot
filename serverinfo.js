const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Replies with server information!'),
	async execute(interaction) {
		await interaction.reply(`Success! Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	},
};
