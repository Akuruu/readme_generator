// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please add a link to your github profile',
        name: 'gitlink',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please write a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please insert any img or video urls to showcase your project.',
        name: 'link',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'ISC', 'None'],
    },
    {
        type: 'input',
        message: 'What command should I run to install dependencies?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What command should I run for tests?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What should your user need to know about using the repository?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to this repo? (please separate with commas)',
        name: 'contributors',
    },
];


// enables the README to be written
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        err ? console.log(err) : console.log('Generating README...')
    })
}

// Initializes app and writes README
function init() { 
    inquirer
     .prompt(questions)
     .then((data) => {
         writeToFile('README.md', generateMarkdown(data))
     }).catch((err) => {
         if (err) throw err;
     })
}

//Function call to initialize app
init()
        