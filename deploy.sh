#!/bin/bash
cd home/ubuntu/ppp/my-pet-log
git pull upstream develop
sudo npm install
export NODE_OPTIONS=--max_old_space_size=800
sudo npm run build
pm2 restart my-pet-log
