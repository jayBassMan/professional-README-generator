const inquirer = require("inquirer");
const fs = require("fs");
const { profile } = require("console");

// I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


function test() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "description",
        message: "Description of project?",
      },
      {
        type: "input",
        name: "installation",
        message: "Instructions on Installation?",
      },
      {
        type: "input",
        name: "usage",
        message:
          "Instructions and examples for use. Include screenshots as needed.?",
      },
      {
        type: "input",
        name: "contribution",
        message: "Who were your contributors?",
      },
      {
        type: "input",
        name: "test",
        message: "Test instructions?",
      },
      {
        type: "input",
        name: "license",
        message: "License",
      },
      {
        type: "input",
        name: "questions",
        message: "Any Questions?",
      },
      {
        type: "input",
        name: "gitHub-username",
        message: "Enter GitHub username URL",
      },
    ])
    .then((response) => {
      fs.writeFile(
        "README.md",
        `# ${response.name}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

${response.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribution](#Contributions)
- [Test](#Test)
- [Intruction](#Intructions)


## Installation

${response.installation}

## Usage

${response.usage}
    
## Credits

${response.contribution}

## License

${response.license}[https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


## Tests

${response.test}

`,
        (err) => (err ? console.error(err) : console.log("HTML file created"))
      );
    });
}

test();


