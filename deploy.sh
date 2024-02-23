#!/bin/bash
cd home/ubuntu/ppp/my-pet-log
git pull upstream main
sudo npm install
sudo npm run build
pm2 restart my-pet-log
