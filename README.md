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

    chmod +x start-dev.sh
    ./start-dev.sh

Log files should be put into `shared/log/game-server.log` and `shared/log/web-server.log`.

Open `http://local.skyduel.com:3001` in your web browser.

License
=======

The MIT License (MIT)

Copyright (c) 2014 Joshua Jung

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.