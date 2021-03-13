# BotMill

Just a personal Discord bot written in TypeScript.

## Start

```
yarn install
yarn start
```

Instead of `yarn start` start the bot with:

```
./bootstrapper.sh
```

This allows it to auto-restart when process is closed, which is required for the `restart` command (without it, the bot just shuts down).

Preferably you want to start it with:
```
screen -S BotMill ./bootstrapper.sh
^A^D
```