const fs = require('fs');
const { createLicenseBadge, generateReadmeContent } = require('../index');


describe('README Generator', () => {

    it('Test createLicenseBadge function', () => {
        expect(createLicenseBadge('MIT License')).toBe('![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)');
        expect(createLicenseBadge('ISC License')).toBe('![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)');
        expect(createLicenseBadge('Apache License 2.0')).toBe('![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)');
        expect(createLicenseBadge('GNU GPLv3')).toBe('![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)');
        expect(createLicenseBadge('GNU GPLv2')).toBe('![GNU GPLv2](https://img.shields.io/badge/License-GPLv2-blue.svg)');
    });


    it('Test generateReadmeContent function', () => {
        const answers = {
            title: 'Test Title',
            description: 'Test Description',
            installationInstructions: 'Test Installation Instructions',
            usageInfo: 'Test Usage Information',
            license: 'MIT License',
            contributions: 'Test Contributions',
            testInstructions: 'Test Test Instructions',
            gitHubUser: 'testuser',
            email: 'test@example.com'
        };

        const expectedContent = `# Test Title

## Description
Test Description

## Table of Contents
- [Installation Instructions](#Installation-Instructions)
- [Usage Information](#Usage-Information)
- [License](#License)
- [Contributions](#Contributions)
- [Test Instructions](#Test-Instructions)
- [Additional Questions](#additional-questions-send-an-email-or-follow-the-link-to-my-github-profile)

## Installation Instructions
Test Installation Instructions

## Usage Information
Test Usage Information

## License
![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Contributions
Test Contributions

## Test Instructions
Test Test Instructions

## Additional Questions? Send an email or follow the link to my github profile:
Email - test@example.com 
Github profile link - https://github.com/testuser`;

        expect(generateReadmeContent(answers)).toBe(expectedContent);
    });
});