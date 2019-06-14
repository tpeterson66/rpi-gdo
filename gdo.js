#!/usr/bin/env node
var express = require('express'); 
var app = express();
var path = require('path');
var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_HIGH);

app.set('view engine', 'ejs');

//app.use(express.static(path.join(__dirname, 'public')));

//console.log(path.join(__dirname, 'public'));

app.get('/', function(req, res){ 
 	res.render('index',{status: "Garage Door Opener Is Ready!"});
});


function BackToOff() {
gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Trigger relay off');
    });
}

app.post('/api/activate', function(req, res){
gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Trigger relay on');
	//console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Garage Door Activated"});
    });
setTimeout(BackToOff, 500);
});

app.listen(3000, function () {
  console.log('Garage Door Opener Started  on Port: 3000!')
})

