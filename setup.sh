#!/bin/bash


# system updates
sudo apt update
sudo apt -y upgrade

# install apche2
sudo apt-get install apache2

# install node js for executing javascript-files on the Webserver
sudo apt-get --yes install nodejs
