const inquirer = require("inquirer");
const Template = require("./src/template")
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const template = new Template();
const htmlPath = "./dist/index.html";
const cssPath = "./dist/style.css";

const managerQuestions = ["What is your team's manager's name?", "What is your team's manager's ID number?", 
                   "What is your team's manager's email address?", "What is your team's manager's office number?",
                   "Would you like to add another team member?"];

const engineerQuestions = ["What is the engineer's name?", "What is the engineer's ID number?", 
                   "What is the engineer's email address?", "What is the engineer's GitHub username?",
                   "Would you like to add another team member?"]

inquirer 
  .prompt([
    {
      type: "input",
      message: managerQuestions[0],
      name: "name"
    },
    {
      type: "input",
      message: managerQuestions[1],
      name: "id"
    },
    {
      type: "input",
      message: managerQuestions[2],
      name: "email"
    },
    {
      type: "input",
      message: managerQuestions[3],
      name: "officeNumber"
    },
    {
      type: "list",
      message: managerQuestions[4],
      name: "nextMember",
      choices: ["Engineer", "Intern", "No"]
    }
  ])
  .then((answers) => {

    const {name, id, email, officeNumber} = answers;
    const manager = new Manager(name, id, email, officeNumber);

    if (answers.nextMember === "Engineer") {
      engineerInquirer(manager);
    } else if(answers.nextMember === "Intern") {
      console.log(answers.nextMember);
    } else {
      console.log(manager);
      openFile();
      createManager(manager);
      closeFile();
      createCSS();
    }
  }
  );

function openFile() {
  
  fs.appendFileSync(htmlPath, template.openHtml());
}

function closeFile() {

  fs.appendFileSync(htmlPath, template.closeHtml());
}

function createCSS() {

  fs.writeFile(cssPath, template.css(), (err) => {
    if(err) {
      console.log(err);
    }
  }
);
}

function createManager(manager) {

  fs.appendFileSync(htmlPath, template.employee(manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber(), manager.getRole()));
}

function engineerInquirer(manager) {
  inquirer
    .prompt([
      {
        type: "input",
        message: engineerQuestions[0],
        name: "name"
      },
      {
        type: "input",
        message: engineerQuestions[1],
        name: "id"
      },
      {
        type: "input",
        message: engineerQuestions[2],
        name: "email"
      },
      {
        type: "input",
        message: engineerQuestions[3],
        name: "github"
      },
      {
        type: "list",
        message: managerQuestions[4],
        name: "nextMember",
        choices: ["Engineer", "Intern", "No"]
      }
    ])
    .then((answers) => {

      const {name, id, email, github} = answers;

      if (answers.nextMember === "Engineer") {

      } else if(answers.nextMember === "Intern") {
        console.log(answers.nextMember);
      } else {
        const engineer = new Engineer(name, id, email, github);
        console.log(engineer);
        openFile();
        createManager(manager);
        createEngineer(engineer);
        closeFile();
        createCSS();
      }

    })
}

function createEngineer(engineer) {

  fs.appendFileSync(htmlPath, template.employee(engineer.getName(), engineer.getId(), engineer.getEmail(), engineer.getGitHub(), engineer.getRole()));
}
