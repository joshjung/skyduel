#!/bin/bash
echo '--------------------Git Pulling--------------------'
git pull
echo '-------------------Pomelo Killing------------------'
pomelo kill --force
echo '--------------Javascript Browserifying-------------'
browserify -d browserify.me.js > web-server/public/js/browserify.bundle.js
echo '-------------------Server NoHupping-----------------'
cd game-server
nohup sh -c 'pomelo start -e production' > ../shared/log/game-server.log &
cd ../web-server
nohup sh -c 'pomelo start -e production' > ../shared/log/web-server.log &
echo '-----------------------Waiting----------------------'
sleep 5
echo '-----------------------Catting-----------------------'
cd ..
cat shared/log/game-server.log
cat shared/log/web-server.log
