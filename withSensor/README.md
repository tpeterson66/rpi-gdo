# Raspberry Pi Garage Door Opener with Sensor

This project adds to the original project in that it also allows users of the GDO to see the current state of the garage door. This project uses both the 5v relay mentioned in the root of the project and an additional door sensor that will need to be connected to the Pi.

![alt text](https://cdn-shop.adafruit.com/970x728/375-00.jpg)

There are two wires attached to the sensor that are used to identify if the connection is opened or closed. One wire will connect to a 3v pin on the raspberry pi and the second will connect to pin 11 to follow the below configuration. The wires are typically short from the supplier, however, you can solder longer wires to them to then connect to the raspberry pi. 

If you'd like to verify the sensor is working correctly, you can run the testSensor.js using node to veriify the console returns the correct value. You will need NodeJS installed before being able to run the script. Make sure you're in the rpi-gdo/withSensor folder and run the following commands to install NodeJS and run the sensor test script.
```
#  Perform updates to system
sudo apt-get update
sudo apt-get -y upgrade

#  Install NodeJS and NPM
sudo apt-get install -y nodejs npm
```

To test the sensor
```
node testSensor.js
```

The script should return either a "door is open" or a "door is closed". Make sure the sensor reports the actual value after opening/closing the door or connection a few times. 
