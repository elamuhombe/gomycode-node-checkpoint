// Import the 'fs' module to work with the file system
const fs = require('fs');

// Append the specified content to the 'welcome.txt' file
fs.appendFile('welcome.txt', 'Hello Node', function(err) {

    // Check if there is an error during the file operation
    if (err) {
        // If there is an error, throw it (terminate the program) and print the error
        throw err;
    }

    // If the operation is successful, log a message indicating the file is created and updated
    console.log('File created and updated');
});
