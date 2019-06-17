#!/bin/bash

#  Perform updates to system
sudo apt-get update
sudo apt-get -y upgrade

#  Install NodeJS and NPM
sudo apt-get install -y nodejs npm

#  Setup always on service 
sudo cp gdo.service /etc/systemd/system/gdo.service

#  Setup Project Folder
sudo mkdir -p /var/www/gdo
sudo cp gdo.js /var/www/gdo/.
sudo cp package.json /var/www/gdo/.
sudo cp -r views /var/www/gdo/.

#  Configure NodeJS software
cd /var/www/gdo
sudo npm install 

#  Enable the service for next boot and manually start the service
sudo systemctl enable gdo
sudo systemctl start gdo
