// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
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
        name: "installationinstructions"
    },
    {
        type: "input",
        message: "How To Use This Project",
        name: "usageinformation"    
    },
    {
        type: "input",
        message: "How should others contribute to this project if they want?",
        name: "contributionguidelines"    
    },
    {
        type: "input",
        message: "How To Test This Project?",
        name: "test instructions"     
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
    },
    {
        type: "input",
        message: "What Is Live Link To This Project?",
        name: "livelink"     
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => {
        err ? console.log(err):console.log("Sucess");
    })
}

// TODO: Create a function to initialize app
function init() {
    const markDown = "";
    inquirer.prompt(questions)
    .then(data=> {
        markDown = generateMarkdown(data);
    })
    .catch(err => console.log(err));
    writeToFile("./mark/README.MD", markDown);
}

// Function call to initialize app
init();
