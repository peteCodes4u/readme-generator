// packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');


// array of questions for user input
const questions = [

    inquirer.prompt([
        // title
        {
            type: "input",
            name: "title",
            message: "Please enter the title for this readMe"
        },
        // description 
        {
            type: "input",
            name: "description",
            message: "Please enter a description for this readMe"
        },
        //  installation instructions
        {
            type: "input",
            name: "installationInstructions",
            message: "Please enter the installation instructions for this application"
        },
        // Usage Information
        {
            type: "input",
            name: "usageInfo",
            message: "Please enter the usage information for this applicaiton"
        },
        // Contributions
        {
            type: "input",
            name: "contributions",
            message: "Please enter the contributors for this application"
        },
        // Test instructions
        {
            type: "input",
            name: "testInstructions",
            message: "Please enter the test instructions for this application"
        },
        // license
        {
            type: "list",
            name: "license",
            message: "Select the license(s) for this application",
            choices: ["MIT License", "ISC License", "Apache License 2.0", "GNU GPLv3", "GNU GPLv2"],
        },
        // github username
        {
            type: "input",
            name: "gitHubUser",
            message: "Please enter your github username"
        },
        // email
        {
            type: "input",
            name: "email",
            message: "Please enter your email address"
        }
    ])


];

// title + sections for (Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions)





// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {


    fs.writeFile('readMe.md', data, (err) => {
        err ? console.error(err) : console.log('readMe created!')
    })


};



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
