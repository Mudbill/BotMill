import Command from "../interfaces/Command";

const command: Command = {
	command: 'restart',
	exec: async (args, msg) => {
		msg.channel.send('Gonna kill myself, I hope someone will catch my fall...');
		setTimeout(() => {
			process.exit();
		}, 1000);
	}
}

export default command;