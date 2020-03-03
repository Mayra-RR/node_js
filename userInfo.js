const fs = require('fs');
const os = require('os');

const user = os.userInfo();

 fs.appendFile('greetings.txt', 
                `Jelou ${user.username}!`, 
                (err) => {
                if(err){
                console.log('Unable to find user');
         
     }
 })