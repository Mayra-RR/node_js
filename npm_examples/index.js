/* console.log('Starting index.js');

const exInput = [1,2,3];
const exInput2 = [1,2,2,3];
const exInput3 = [1,1,1,1];

function removeRepeated(input){
    if(input){
        console.log(input);
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            const other = input[index+1]
            console.log(`Element: ${element} other: ${other}`);
            if(element === other){
                input.splice(index,1);
            }
        }
        console.log(`Resultado: ${input}`);
        
    }else {
        console.log('Value is invalid');
        
    }
}
removeRepeated(exInput); */
 

////

/* console.log('Starting index.js');

const _ = require('lodash');

const exInput = [1,2,3];
const exInput2 = [1,2,2,3];
const exInput3 = [1,1,1,1];

function removeRepeated(input){
    console.log(_.uniq(input));
    
}
removeRepeated(exInput2); */

console.log('Starting index.js');

const http = require('http');


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Jelou guorld');
        res.end();
    }
});

/* server.on('connection', (socket) => {
    console.log('New connection...');
    
}) */

server.listen('3000');

console.log('Listening on port 3000...');
