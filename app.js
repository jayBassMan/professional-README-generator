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
        message: "Usage information?",
      },
      {
        type: "input",
        name: "contribution",
        message: "Contribution guidelines?",
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
        "index.html",
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h2 class="display-4">Name</h2>
      <p><!--name-->${response.name}</p>
      <h2 class="lead">Description</h2>
      <p><!--Description-->${response.description}</p>
      <h2 class="lead">Installation</h2>
      <p><!--Installation-->${response.installation}</p>
      <h2 class="lead">Usage</h2>
      <p><!--Usage-->${response.usage}</p>
      <h2 class="lead">Contributing</h2>
      <p><!--Contributing-->${response.contribution}</p>
      <h2 class="lead">Test instructions</h2>
      <p><!--Test instructions?-->${response.test}</p>
      <h2 class="lead">License</h2>
      <p><!--License-->${response.license}</p>
      <h2 class="lead">Questions</h2>
      <p><!--Questions-->${response.question}</p>
      <h2 class="lead">Enter GitHub username URL</h2>
      <p><!--Enter GitHub username URL-->${response.github}</p>
    </div>
  </div>
</body>
</html>

`,
        (err) => (err ? console.error(err) : console.log("HTML file created"))
      );
    });
}

test();


