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
        message: 'Who contributed to this repo?',
        name: 'contributors',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)

        .then((data) => {

            // use markdown syntax? instead of html :(
            let info = `
            \n # ${data.title} \n

            \n ## Table of Contents \n
            \n-----------------------------------------\n 
          \n - [Description](#description) \n
          \n - [Showcase](#link) \n
          \n - [Installation Instructions](#install\n
          \n - [Usage Information](#usage) \n
          \n - [Licenses](#license) \n
          \n - [Contributors](#contributors) \n
          \n - [Questions?](#username) \n

           \n ## Description \n
           \n-----------------------------------------\n 
           \n ${data.description}\n

           \n ## Showcase\n
           \n-----------------------------------------\n 
           \n ![alt text](${data.link})\n

         \n ## Installation Instructions\n
         \n-----------------------------------------\n 
         \n ${data.install}\n

           \n ## Usage Information \n
           \n-----------------------------------------\n 
           \n  ${data.usage}\n

          \n  ## Licenses \n
          \n-----------------------------------------\n 
          \n ${data.license}\n

            \n ## Contributors\n
            \n-----------------------------------------\n 
            \n - [${data.contributors}]()\n

            \n ## Questions?\n
            \n-----------------------------------------\n 
           \n  My Github: [${data.username}](${data.gitlink})\n
            \n Contact Me: ${data.email} \n
            `

            fs.writeFile('README.md', info, (err) => {
                err ? console.log(err) : console.log('Generating README...')
            })
        }).catch((err) => {
            if (err) throw err;
     // Sets an empty string for empty choices
        if (link !== None) {
            return "";
          }
          if (contributors !== None) {
            return "";
          }
          if (install !== None) {
            return "";
          }
          if (usage !== None) {
            return "";
          }

        });
    }

        

writeToFile();


// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init()
    