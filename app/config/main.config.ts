import Activity from '../src/enums/Activity';
import Config from '../src/interfaces/Config';
import _token from './token.config';

const { PLAYING, LISTENING_TO, WATCHING } = Activity;

const config: Config = {
	token: _token,
	prefix: '.',
	activities: [
		[PLAYING, 'you for a fool'],
		[LISTENING_TO, 'my mixtape'],
		[WATCHING, 'you masturbate ;)']
	],
	channels: {
		log: 'bot_log',
		welcome: 'welcome'
	},
	welcomeMessages: (member) => [
		`Welcome to the server ${member}`,
		`${member} has joined the server!`
	],
	responses: [
		{ on: ['nigga', 'neega'], say: ['get sum bitches on yo dick', 'i heard that'] },
		{ on: ['tebrick', 'tebrikk', 'tbrix', 'frokostbrikke', 't-brix'], say: ['T-BRIX GANG REPRESENT', 'lunsj?'] },
		{ on: ['dos', 'ms-dos'], say: ['HAR DU VÆRT I DOS?', 'det er hjernen i maskinen..!'] },
		{ on: ['rotte'], say: ['🐀', 'https://cdn.discordapp.com/emojis/757959580218032248.png?v=1'] }
	]
}

export const {
	token,
	prefix,
	activities,
	channels,
	welcomeMessages,
	responses
} = config;

export default config;