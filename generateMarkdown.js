// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }

  switch (license.toLowerCase()) {
      case 'mit':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'apache':
          return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      // Add more cases for other licenses as needed
      default:
          return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
          return 'https://www.apache.org/licenses/LICENSE-2.0';
      // Add more licenses and their links as needed
      default:
          return ''; // Return empty string if no license or unsupported license
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
      return ''; // Return an empty string if no license is provided
  }

  // Map the license type to its corresponding section in the README
  const licenseSections = {
      'MIT License': `## License
      
This project is licensed under the terms of the MIT license. You can find the full license text [here](https://opensource.org/licenses/MIT).`,
      'Apache License 2.0': `## License
      
This project is licensed under the terms of the Apache License 2.0. You can find the full license text [here](https://www.apache.org/licenses/LICENSE-2.0).`
      // Add more licenses here as needed
  };

  // Check if the provided license type exists in the licenseSections object
  if (licenseSections[license]) {
      return licenseSections[license];
  } else {
      return ''; // Return an empty string if the provided license type is not recognized
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installations}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions about this project, please reach out to ${data.email}.
`;

}

module.exports = generateMarkdown;
