#!/bin/bash
echo 'Killing Pomelo'
pomelo kill --force
echo 'Browserifying'
browserify -d browserify.me.js > web-server/public/js/browserify.bundle.js
echo 'Starting Game Server (to shared/log/game-server.log)'
cd game-server
nohup sh -c 'pomelo start -e production' > ../shared/log/game-server.log &
cd ../web-server
nohup sh -c 'pomelo start -e production' > ../shared/log/web-server.log &
