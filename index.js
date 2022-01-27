const inquirer = require("inquirer");
const Template = require("./src/template")
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const template = new Template();
const htmlPath = "./dist/index.html";
const cssPath = "./dist/style.css";

const managerQuestions = ["What is your team's manager's name?", "What is your team's manager's ID number?", 
                   "What is your team's manager's email address?", "What is your team's manager's office number?",
                   "Would you like to add another team member?"];

const engineerQuestions = ["What is the engineer's name?", "What is the engineer's ID number?", 
                   "What is the engineer's email address?", "What is the engineer's GitHub username?",
                   "Would you like to add another team member?"];

const internQuestions = ["What is the intern's name?", "What is the intern's ID number?", 
                   "What is the intern's email address?", "What school did the intern go to?",
                   "Would you like to add another team member?"];

let employees = [];

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
    employees.push(manager);
    console.log(employees);

    if (answers.nextMember === "Engineer") {
      engineerInquirer();
    } else if(answers.nextMember === "Intern") {
      internInquirer();
    } else {
      createHtmlFile(employees);
    }
  }
  );

function engineerInquirer() {
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
      const engineer = new Engineer(name, id, email, github);
      employees.push(engineer);
      console.log(employees);

      if (answers.nextMember === "Engineer") {
        engineerInquirer();
      } else if(answers.nextMember === "Intern") {
        internInquirer();
      } else {
        createHtmlFile(employees);
      }

    })
}

function internInquirer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: internQuestions[0],
        name: "name"
      },
      {
        type: "input",
        message: internQuestions[1],
        name: "id"
      },
      {
        type: "input",
        message: internQuestions[2],
        name: "email"
      },
      {
        type: "input",
        message: internQuestions[3],
        name: "school"
      },
      {
        type: "list",
        message: internQuestions[4],
        name: "nextMember",
        choices: ["Engineer", "Intern", "No"]
      }
    ])
    .then((answers) => {

      const {name, id, email, school} = answers;
      const intern = new Intern(name, id, email, school);
      employees.push(intern);
      console.log(employees);

      if (answers.nextMember === "Engineer") {
        engineerInquirer();
      } else if(answers.nextMember === "Intern") {
        internInquirer();
      } else {
        createHtmlFile(employees);
      }

    })
}

function createHtmlFile(team) {

  openFile();
  team.forEach(member => createEmployee(member));
  closeFile();
  createCSS();
}

function openFile() {
  
  fs.appendFileSync(htmlPath, template.openHtml());
}

function createEmployee(member) {

  fs.appendFileSync(htmlPath, template.employee(member.getName(), member.getId(), member.getEmail(), thirdParam(member), member.getRole()));
}

function thirdParam(role) {
  
  if (role instanceof Manager) {
    return role.getOfficeNumber();
  } else if (role instanceof Engineer) {
    return role.getGitHub();
  } else if (role instanceof Intern) {
    return role.getSchool();
  }
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

