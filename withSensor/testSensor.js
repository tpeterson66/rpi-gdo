var rpio = require('rpio');

rpio.open(11, rpio.INPUT);
console.log('Door is currently ' + (rpio.read(11) ? 'closed' : 'open'));
