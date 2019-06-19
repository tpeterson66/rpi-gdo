#!/usr/bin/env node
var express = require('express');
var app = express();
var path = require('path');
var rpio = require('rpio');

// Input sensor for the door
rpio.open(11, rpio.INPUT);
rpio.open(7, rpio.OUTPUT, rpio.HIGH);

app.set('view engine', 'ejs');

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    value = rpio.read(11);
    if (value === 0) {
        //door is open
        return res.render('index', { status: "The garage door is open" });
    } else {
        return res.render('index', { status: "The garage door is closed" });
    }
});

function triggerDoor() {
    rpio.write(7, rpio.LOW)
    rpio.sleep(.5);
    rpio.write(7, rpio.HIGH)
}

app.post('/api/close', function (req, res) {
    //Check the status of the door
    value = rpio.read(11);
    if (value === 0) {
        //door is open
        triggerDoor();
        return res.render('index', { status: "Closing door" });
    } else {
        return res.render('index', { status: "Door is already closed..." });
    }
});

app.post('/api/open', function (req, res) {
    //Check the status of the door
    value = rpio.read(11);
    if (value === 0) {
        //door is open
        return res.render('index', { status: "Door is already open..." });
    } else {
        triggerDoor();
        return res.render('index', { status: "Closing Door" });
    }
});


app.listen(3000, function () {
    console.log('Garage Door Opener Started  on Port: 3000!')
})
