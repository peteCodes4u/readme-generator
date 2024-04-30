const inquirer = require("inquirer");
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title for this README"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter the description for this README"
    },

];

// Function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README created!');
        }
    });
};

// Function to generate README content
const generateReadmeContent = (answers) => {
    return `
# ${answers.title}

## Description
${answers.description}

`;

};

// Prompt user for input
inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadmeContent(answers);
    writeToFile('readMe.md', readmeContent);
});