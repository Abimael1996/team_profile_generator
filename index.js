const inquirer = require("inquirer");
const Template = require("./src/template")
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const template = new Template();
const htmlPath = "./dist/index.html";

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

function teamInquirer(questions, Member) {
inquirer 
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "name"
    },
    {
      type: "input",
      message: questions[1],
      name: "id"
    },
    {
      type: "input",
      message: questions[2],
      name: "email"
    },
    {
      type: "input",
      message: questions[3],
      name: "unique"
    },
    {
      type: "list",
      message: questions[4],
      name: "nextMember",
      choices: ["Yes, add an engineer", "Yes, add an intern", "No, finish building my team"]
    }
  ])
  .then((answers) => {

    const {name, id, email, unique} = answers;
    const manager = new Member(name, id, email, unique);
    employees.push(manager);

    if (answers.nextMember === "Yes, add an engineer") {
      teamInquirer(engineerQuestions, Engineer);
    } else if(answers.nextMember === "Yes, add an intern") {
      teamInquirer(internQuestions, Intern);
    } else {
      createTeam(employees);
    }
  }
  );
}

function createTeam(team) {

  const teaMembers = team.map(member => template.employee(member.getName(), member.getId(), member.getEmail(), fourthParam(member), member.getRole()));

  fs.writeFile(htmlPath, template.htmlFile(teaMembers), (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log("Your page has been created!")
    }
  });

}

function fourthParam(role) {
  
  if (role instanceof Manager) {
    return role.getOfficeNumber();
  } else if (role instanceof Engineer) {
    return role.getGitHub();
  } else if (role instanceof Intern) {
    return role.getSchool();
  }
}

teamInquirer(managerQuestions, Manager);