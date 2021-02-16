import chalk from 'chalk';

const con = {
	log: (msg: any, ...obj: any) => {
		console.log(msg, ...obj)
	},
	info: (msg: any, ...obj: any) => {
		console.info(`${chalk.greenBright('[INFO]')}`, msg, ...obj);
	},
	error: (msg: any, ...obj: any) => {
		console.error(`${chalk.redBright('[ERROR]')}`, msg, chalk.red(...obj));
	},
	fatal: (msg: any, ...obj: any) => {
		console.error(`${chalk.redBright('[FATAL]')}`, msg, chalk.red(...obj));
	}
};

const channel = {
	info: (msg: any) => {

	},
	error: (msg: any) => {

	}
}

export {
	con as console,
	channel
};