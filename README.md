SkyDuel
=======

SkyDuel plane fighting game. Built with Pomelo, ReactJS, and PhaserJS.

Installation
============

**Ubuntu Prep**

`sudo apt-get update`

**Install [Node.js](http://www.nodejs.org/)**

*Ubuntu:*

    sudo apt-get install nodejs
    ln -s /usr/bin/nodejs /usr/bin/node

*Windows:*

Find installer on site above.

**Install [NPM](http://www.npmjs.org)**

Ubuntu: `sudo apt-get install npm`

**Install [Pomelo](http://pomelo.netease.com/)**

`npm install -g pomelo`

**Clone SkyDuel**

    git clone https://github.com/joshjung/skyduel.git

**Run NPM Install**

    cd skyduel_install_dir
    chmod +x ./npm-install.sh
    ./npm-install.sh //runs npm-install on both game-server and web-server

**Edit Hosts File**

*Ubuntu:*

Edit `/etc/hosts` and add:

    127.0.0.1    local.skyduel.com

*Windows:*

Edit `%systemroot%\drivers\etc\hosts` and add:

    [IP of machine running pomelo]    local.skyduel.com

Running
=======

Navigation to `./game-server` and run `pomelo start`. This spins up the game socket servers.

Navigation to `./web-server` and run `pomelo start`. This spins up the NodeJS Express web server.

Open `http://local.skyduel.com:3001` in your web browser.