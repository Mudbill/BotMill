import { Client } from 'discord.js';
import glob from 'glob';
import path from 'path';
import { prefix } from '../../config';
import Command from '../interfaces/Command';
import { console } from '../util/log';

const map: Map<string, Command> = new Map();
export { map as commands };

export default async function (client: Client) {
	const files = glob.sync('./app/src/commands/*');
	// Just in case this function were to be called twice, we don't want it to duplicate the contents
	map.clear();

	for (const file of files) {
		try {
			const { default: cmd }: { default: Command } = await import(path.resolve(file));
			if (map.has(cmd.command)) {
				console.error(`Duplicate command ${cmd.command}`);
				continue;
			}
			map.set(cmd.command, cmd);
		} catch (err) {
			console.error('Failed to import command', err);
		}
	}

	client.on('message', async msg => {
		if (msg.channel.type === 'dm') return
		if (msg.author.bot) return
		if (!msg.content.startsWith(prefix)) return

		const args = msg.content.substr(prefix.length).split(' ')
		const command = args.shift()
		const obj = map.get(command)

		if (obj) {
			// if (!msg.member.permissions.has(obj.permission)) {
			// 	return console.error('Failed permissions test')
			// }

			try {
				obj.exec(args, msg)
			} catch (err) {
				return console.error('Failed executing command')
			}
		}
	})
	console.info('Initialized command listener')
}