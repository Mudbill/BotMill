import Command from '../interfaces/Command';

const command: Command = {
	command: 'yarn',
	exec: async (args, msg) => {
		if (
			args.length < 2 ||
			args[0] !== 'lag' ||
			args[1] !== 'tabell'
		) {
			return msg.channel.send('Ufullstendig kommando, prøv `yarn lag tabell`');
		}

		const { channel } = msg;

		const msg2 = await channel.send('Laging tabell...');
		channel.startTyping();
		setTimeout(async () => {
			msg2.edit(`Her e tabellen din:\`\`\`
+----------------------------------+---------------+
|               Navn               |  Intelligens  |
+----------------------------------+---------------+
| Apekatt                          | Ja            |
| Gorilla                          | Kanskje litt  |
| Sjimpanse                        | Masse         |
| Rotta                            | desverre      |
+----------------------------------+---------------+\`\`\``
			);
			channel.stopTyping();
		}, 1000);
	}
}

export default command;