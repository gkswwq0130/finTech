/*

//async
var fs = require('fs');

console.log('first function');

fs.readFile('./test.txt', 'utf8', function(err, result){
    if (err)
    {
        console.error(err);
        throw err;
    }
    else{
        console.error("second function..time..error");
        console.log(result);
    }
});

console.log('last function');

*/

//sync
var fs = require('fs');

console.log('A');

var result = fs.readFileSync('./test.txt', 'utf8');

console.log(result);

console.log('C');

