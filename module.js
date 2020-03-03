/* var logger = require('./logger');
logger.writeText('message');

var message = '';
console.log(global.message);

 */

const fs = require('fs');
 fs.appendFile('greetings.txt', 'Jelou guorld', function (err){
     if(err){
         console.log('Unable to write to file');
         
     }
 })