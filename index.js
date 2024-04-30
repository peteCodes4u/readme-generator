// packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// array of questions for user input
const questions = [

    // title
    {
        type: "input",
        name: "title",
        message: "Please enter the title for this README"
    },
    // description 
    {
        type: "input",
        name: "description",
        message: "Please enter a description for this README"
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
        if (err) { console.log(err) } else { console.log('README file successfully created!') }
    })

};

const generateReadmeContent = function (answers) {

    const licenseBadge = createLicenseBadge(answers.license);

    return `
# ${answers.title}
    
## Description
${answers.description}

## Table of Contents
- [Installation Instructions](#Installation-Instructions)
- [Usage Information](#Usage-Information)
- [License](#License)
- [Contributions](#Contributions)
- [Test Instructions](#Test-Instructions)
- [Additional Questions](#additional-questions-send-an-email-or-follow-the-link-to-my-github-profile)

## Installation Instructions
${answers.installationInstructions}

## Usage Information
${answers.usageInfo}

## License
${licenseBadge}

## Contributions
${answers.contributions}

## Test Instructions
${answers.testInstructions}

## Additional Questions? Send an email or follow the link to my github profile:
Email - ${answers.email} 
Github profile link - https://github.com/${answers.gitHubUser}  
`;
}

// propmt for user input
inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadmeContent(answers);
    writeToFile('README.md', readmeContent)
})

// generate badge for licesnse
function createLicenseBadge(license) {
    let badgeURL = '';

    if (license == 'MIT License') {
        badgeURL = '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else {
        if (license == 'ISC License') {
            badgeURL = '![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)';
        } else {
            if (license == 'Apache License 2.0') {
                badgeURL = '![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
            } else {
                if (license == 'GNU GPLv3') {
                    badgeURL = '![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
                } else {
                    if (license == 'GNU GPLv2') {
                        badgeURL = '![GNU GPLv2](https://img.shields.io/badge/License-GPLv2-blue.svg)';
                    } else { badgeURL = ''; }
                }
            }
        }
    };

    return badgeURL;
}



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
