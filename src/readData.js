const fs = require('fs');


fs.appendFile('welcome.txt', 'Hello Node', function (err){
    if (err) throw err;
    console.log('File created and updated successfully ');
});




