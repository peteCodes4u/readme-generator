// packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// array of questions for user input
const questions = [

    // license
    {
        type: "list",
        name: "license",
        message: "Select the license(s) for this application",
        choices: ["MIT License", "ISC License", "Apache License 2.0", "GNU GPLv3", "GNU GPLv2"],
    },

];

// function to write README file
const writeToFile = (fileName, data) => {


    fs.writeFile(fileName, data, (err) => {
        if (err) { console.log(err) } else { console.log('readme file successfully created!') }
    })

};

const generateReadmeContent = function (answers) {
    const licenseBadge = createLicenseBadge(answers.license);

    return `
## Table of Contents
- [License](#License)

## License
${licenseBadge}
`;
}

// propmt for user input
inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadmeContent(answers);
    writeToFile('badge.md', readmeContent)
})

// license badge
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
