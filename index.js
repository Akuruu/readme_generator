// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is your name',
        name: 'yourname',
      },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'ISC', 'None'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
/*  .then((answers) => {
    const filename = `${answers.yourname.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Generating README...')
    );

   }).catch((err) => {
       if (err) throw err;
   });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
