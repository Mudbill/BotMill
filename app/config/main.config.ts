import Activity from '../@types/Activity';
import Config from '../@types/Config';
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
		{ on: ['hello', 'welcome'], say: ['good day', 'cheers'] }
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