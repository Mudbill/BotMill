import { Message } from "discord.js";

export default interface Command {
	command: string,
	permission?: string,
	description?: string,
	exec: (args: string[], msg: Message) => any;
}