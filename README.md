# Raspberry Pi Garage Door Opener
Raspberry Pi Garage Door Opener Project

## Wiring the Raspberry Pi
![alt text](https://www.cytron.io/image/cache/catalog/products/BB-RELAY-5V-02/BB-RELAY-5V-02-0-1-1-512x512.png)
Before installing the software on the Raspberry Pi, the following project will require a single 5v relay that will be used to open the connection to the garage door opener. The relay will have a 5v connection, ground connection, and GPIO in pin. The 5v or vcc pin can be connected to any 5v pin on the pi. The ground pin can be connected to any ground pin on the Pi, the GPIO in pin must be connected to GPIO4 or PIN7 to match the configuration in the below software.

Once the relay is connected to the Pi, you will need to run a two pair wire from the relay to the garage door opener. When looking at the garage door opener, you will need to find the two wires that run to the push button attached to the wall. Connect the relay to the same wire ports as the push button for the door.

## Install the GDO software
Install a fresh copy of Raspbian on a Raspberry Pi. This should work on any version of Pi, however, it was only tested on a Raspberry Pi 3 B+.

You can download the latest version of Raspbian from https://www.raspberrypi.org/downloads/raspbian/. https://www.balena.io/etcher/ is a useful tool to copy the image to a SD card for the Raspberry Pi. Once Raspbian is installed, enable the wifi adapter and connect the Pi to the wifi (can also use the built-in ethernet port as well). Once you're able to SSH to the Raspberry Pi, make sure that you change the default password from pi/raspberry to something more secure.

To get started with this project, you can clone this repo to a working directory on the Pi and follow these instructions.

Step #1 - Install GIT to clone the github repository
```
sudo apt-get install -y git
git clone https://github.com/tpeterson66/rpi-gdo.git
```
Step #2 - Change to the project directory and make the setup.sh file executeable and execute it.
```
cd rpi-gdo
chmod +x setup.sh
./setup.sh
```

Step #3 - Ensure the software was installed and configured correctly
Ensure the service is started
```
pi@raspberrypi:~/rpi-gdo $ systemctl status gdo
gdo.service - Raspberry Pi Garage Door Opener
   Loaded: loaded (/etc/systemd/system/gdo.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2019-06-14 18:12:26 BST; 45s ago
 Main PID: 7691 (node)
   CGroup: /system.slice/gdo.service
           └─7691 /usr/bin/node /var/www/gdo/gdo.js

Jun 14 18:12:26 raspberrypi systemd[1]: Started Raspberry Pi Garage Door Opener.
Jun 14 18:12:29 raspberrypi node[7691]: Garage Door Opener Started  on Port: 3000!
```

If successful, navigate to http://<raspberryPi IP address>:3000


