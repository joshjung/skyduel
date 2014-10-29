#!/bin/bash
for pid in $(cat pid); do kill -9 $pid; done
rm pid
