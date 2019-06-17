var gpio = require('pi-gpio');
gpio.setDirection(11, "input");


function testSensor() {
    gpio.read(11, function (err, value) {
        if (err) {
            throw err;
        }
        if (value === 0) {
            console.log("The door is open")
        }
        else {
            console.log("The door is closed")
        }
    });
}

setInterval(testSensor, 10000)
