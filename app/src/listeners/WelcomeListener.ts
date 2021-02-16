import { Client } from 'discord.js'
import { channels } from '../../config'
import { console } from '../util/log'

export default async function (client: Client) {
	const welcomeChannelName = channels.welcome

	client.on('guildMemberAdd', async member => {
		const welcomeChannel = member.guild.channels.cache.find(c => c.name === welcomeChannelName)
		if (!welcomeChannel) {
			console.error('err')
			throw new Error('Welcome channel was not found in the server')
		}
		console.info(welcomeChannel)
		// const welcomeMessage = config.welcomeMessages(member)
	})

	console.info('Initialized welcome listener')
}