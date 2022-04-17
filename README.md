# Tokino
I witnessed some people asking for bots that can make a VC act like a clock. Weird request but okay.

## Installation
* Clone this repo.
```sh
$ git clone https://github.com/retraigo/tokino
```

* Open the repo in your command line.
```sh
$ cd tokino
```

* Install dependencies.
```sh
$ npm i # NPM
$ pnpm i # PNPM
```

* Open `clock.js` in a text editor.
* Replace `your channel id` with the ID of the channel you wanna work with.
* Replace `insert-token-here` with the token of your Discord bot.
* Replace `60000` in the last line with any number of milliseconds to set an interval. It isn't recommended to go below `60000` tho.
* Start the bot.
```sh
$ node clock.js
```

**MAKE SURE THAT THE BOT HAS PERMISSIONS TO EDIT CHANNELS, OR AT LEAST THAT SPECIFIC CHANNEL.**

Need the bot to not die after closing your terminal? Check out [PM2](https://pm2.keymetrics.io/).