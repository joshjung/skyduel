#!/bin/bash
rm -rf shared/logs
sudo kill $(fuser -n tcp 4050 2> /dev/null)
sudo kill $(fuser -n tcp 3005 2> /dev/null)
sudo kill $(fuser -n tcp 3001 2> /dev/null)
sudo kill $(fuser -n tcp 6050 2> /dev/null)
