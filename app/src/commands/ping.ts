import Command from '../interfaces/Command'

const command: Command = {
	command: 'ping',
	exec: async (args, msg) => {
		const msg2 = await msg.channel.send('🙂');
		const delay = msg2.createdTimestamp - msg.createdTimestamp;

		msg2.edit({
			content: '',
			embed: {
				fields: [
					{ name: 'API:', value: `${msg.client.ws.ping}ms`, inline: true },
					{ name: 'Bot:', value: `${delay}ms`, inline: true },
				]
			}
		});
	}
}

export default command;