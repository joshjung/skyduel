#!/bin/bash
./kill.sh
cd game-server
nohup pomelo start > ../game-server.log &
cd ../web-server
nohup pomelo start > ../web-server.log &
