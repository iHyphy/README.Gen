// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of your project:', 

    }, 
    {
        type: 'input',
        name: 'installations',
        message: 'What are the installation instructions?', 
        
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended function of your project?', 
        
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for this project?', 
        choices: [ 
                    'MIT License', 
                    'Apache License 2.0',     
                    'Eclipse Public License',
                    'no license'
                ],
        default: 'no license'
    }, 
    {
        type: 'input',
        name: 'contributing',
        message: 'How can one wish to contribute?', 
        
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What email would you like to provide for questions or concerns? (if there are any)', 
        
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${fileName} has been created successfully!`);
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            // Generate markdown content
            const markdown = generateMarkdown(answers);
            // Write markdown content to README.md file
            writeToFile('READMEGEN.md', markdown);
        })
        .catch(error => {
            console.error('An error occurred while prompting questions:', error);
        });
}

// Function call to initialize app
init();