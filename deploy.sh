#!/bin/bash
cd home/ubuntu/my-pet-log
git pull origin main
sudo npm install
sudo npm run build
pm2 restart mypetlog-server
