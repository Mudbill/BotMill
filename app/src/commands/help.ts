import Command from "../interfaces/Command"
// import { commands } from '../listeners/CommandListener';

const command: Command = {
	command: 'help',
	exec: async (args, msg) => {
		msg.channel.send('maybe later');
	}
}

export default command;