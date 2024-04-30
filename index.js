// packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// array of questions for user input
const questions = [

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

];

// function to write README file
const writeToFile = (fileName, data) => {


    fs.writeFile(fileName, data, (err) => {
       if (err){console.log(err)} else {console.log('readme file successfully created!')}
    })

};

const generateReadmeContent = function (answers){

return `
# ${answers.title}
    
## Description
${answers.description}

## Table of Contents
- [Installation Instructions](#Installation-Instructions)
- [Usage Information](#Usage-Information)
- [Contributions](#Contributions)
- [Test Instructions](#Test-Instructions)
- [License](#License)
- [Github Username](#Github-Username)
- [Additional Questions](#Additional-Questions?-Send-an-email-to:)

## Installation Instructions
${answers.installationInstructions}

## Usage Information
${answers.usageInfo}

## Contributions
${answers.contributions}

## Test Instructions
${answers.testInstructions}

## License
${answers.license}

## Github Username
${answers.gitHubUser}

## Additional Questions? Send an email to:
${answers.email}
`;
}

// propmt for user input
inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadmeContent(answers);
    writeToFile('readMe.md', readmeContent)
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
