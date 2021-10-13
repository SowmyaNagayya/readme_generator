// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What Is Your Name",
        name: "username"
    },
    {
        type: "input",
        message: "What Is Your Project Title?",
        name: "projecttitle"
    },
    {
        type: "input",
        message: "What Is This Project About",
        name: "description"
    },
    {
        type: "input",
        message: "How To Install This Project",
        name: "installation"
    },
    {
        type: "input",
        message: "How To Use This Project",
        name: "usage"    
    },
    {
        type: "input",
        message: "How should others contribute to this project if they want?",
        name: "contributing"    
    },
    {
        type: "input",
        message: "How To Test This Project?",
        name: "test"     
    },
    {
        type: "list",
        message: "What License Wolud You Like For This Project",
        name: "licenseType",
        choices: ["MIT License", "BSD 2-Clause License", "Boost Software License 1.0"]
    },
    {
        type: "input",
        message: "What Is Your GitHub Name?",
        name: "github"        
    },
    {
        type: "input",
        message: "What Is Your Email?",
        name: "email"     
    }
       
];

// TODO: Create a function to write README file
function writeToFile(fileName, generateReadme) {
    fs.writeFile("generateREADME.md",generateReadme,(err) => {
        err ? console.log(err):console.log("Sucess");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then(response => {
          const generateReadme= generateMarkdown(response);
          writeToFile("generateREADME.md", generateReadme);
    })
    
};

// Function call to initialize app
init();
