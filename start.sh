#!/bin/bash
./kill.sh
cd game-server
nohup sh -c 'pomelo start -e production' > ../shared/log/game-server.log &
cd ../web-server
nohup sh -c 'pomelo start -e production' > ../shared/log/web-server.log &
