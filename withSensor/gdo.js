#!/usr/bin/env node
var express = require('express');
var app = express();
var path = require('path');
var gpio = require('pi-gpio');

gpio.setDirection(7, "output");
gpio.setDirection(11, "input");

app.set('view engine', 'ejs');

//app.use(express.static(path.join(__dirname, 'public')));

//console.log(path.join(__dirname, 'public'));

app.get('/', function (req, res) {
    gpio.read(11, function (err, value) {
        if (err) throw err;
        if (value === 0) {
            res.render('index', { status: "Garage Door Opener is Ready - Door is Open" })
        } else {
            res.render('index', { status: "Garage Door Opener is Ready - Door is Closed" })
        }
    })
});

function cleanUp() {
    gpio.write(7, true, function (err) {
        if (err) throw err;
        //console.log('Trigger relay off');
    });
}

app.post('/api/close', function (req, res) {
    //Check the status of the door
    gpio.read(11, function (err, value) {
        if (err) throw err;
        if (value === 0) {
            console.log("Door is open, closing the door.");
            gpio.write(7, false, function (err) {
                if (err) throw err;
                console.log('Trigger relay on');
                return res.render('index', { status: "Garage Door Is Closing" });
            });
            setTimeout(cleanUp, 500);
        } else {
            return res.render('index', { status: "Garage Door Is Already Closed..." });
        }
    });
});

app.post('/api/open', function (req, res) {
    //Check the status of the door
    gpio.read(11, function (err, value) {
        if (err) throw err;
        if (value === 1) {
            console.log("Door is closed, opening the door.");
            gpio.write(7, false, function (err) {
                if (err) throw err;
                console.log('Trigger relay on');
                return res.render('index', { status: "Garage Door Is Opening" });
            });
            setTimeout(cleanUp, 500);
        } else {
            return res.render('index', { status: "Garage Door Is Already Open..." });
        }
    });
});


app.listen(3001, function () {
    console.log('Garage Door Opener Started  on Port: 3000!')
})
