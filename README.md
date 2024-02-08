# Node.js Project
This Project contains 3 sub programs: 
- Hello World Program: Prints "HELLO WORLD" to the console as is saved in the file 'hello-world.js'.
- Node.js Server: This program creates a simple Node.js server that responds with `<h1>Hello Node!!!!</h1>` when accessed at http://localhost:3000. The program is stored in 'server.js' file.
- File System: This program demonstrates file system operations by creating a file named "welcome.txt" with the content "Hello Node" and then reading and logging the content to the console. The program is saved in 'fileOperation.js'.
- Password Generator Program: This program uses the `generate-password` package to generate a random password and logs it to the console. The program is saved in 'password-generator' file.
- Email Sender Program: This program uses the `nodemailer` package to send a test email to yourself using Gmail. The program is stored in 'email-sender file.

## Project Structure
![project-structure](https://github.com/elamuhombe/gomycode-node-checkpoint/assets/10416177/ed5beeaf-7b17-45e5-b933-667f25463078)

## Screenshots
### Hello-world.js output
![hello-world ](https://github.com/elamuhombe/gomycode-node-checkpoint/assets/10416177/ef1e682e-fc0e-43c4-becf-cf2ba48a779b)


### server.js output
![hello-node](https://github.com/elamuhombe/gomycode-node-checkpoint/assets/10416177/371620bd-028c-4546-b37e-8854d1848c31)





### password-generator output
![password ](https://github.com/elamuhombe/gomycode-node-checkpoint/assets/10416177/d32deaa6-035b-4ad9-8f51-b8f95397ff67)


### email-sender output in console
![console nodemailer ](https://github.com/elamuhombe/gomycode-node-checkpoint/assets/10416177/c8721ab1-e122-4c82-9488-a46854b28493)

### email-sender output in gmail
![gmail nodemailer](https://github.com/elamuhombe/gomycode-node-checkpoint/assets/10416177/6ae80881-8ab6-472c-98b0-165faf8ccdc3)


## Core Modules
- http: provides the functionality for creating http servers and making http requests.
- fs: provides the functionality for interacting with the file system.
  
## Dependencies
- password-generator:module that can be used to generate random passwords
- nodemailer: module for sending emails with Node.js.
  
## Technologies
### Node.js v21.4.0
A JavaScript runtime that allows you to run JavaScript code on the server side.

## How to Run

1. Install Node.js (https://nodejs.org/)
2. Download and install Dependencies:
   ```bash
   
   npm install http fs password-generator nodemailer
3. Open the project folder files with
4. Navigate the src folder in terminal
   /Desktop/GOMYCODE/nodejs-checkpoint$
   NB: 'Desktop' is the location of the project files. You can replace it with the your location of your project.
   cd src
6. Run the programs file
   Example to run the hello-world program
   node hello-world.js

## Author
Elaine Muhombe

## Acknowledgements
- w3schools: https://www.w3schools.com/
- Node.js website: https://nodejs.org/docs/latest/api/modules.html#core-modules
- https://dev.to/aneeqakhan/how-to-setup-a-nodejs-server-port-25l6

   
 
