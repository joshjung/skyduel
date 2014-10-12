#!/bin/bash
pomelo kill --force
cd game-server
nohup sh -c 'pomelo start -e development' > ../shared/log/game-server.log &
cd ../web-server
nohup sh -c 'pomelo start -e development' > ../shared/log/web-server.log &
