const Employee = require("./lib/Employee")
const inquirer = require("inquirer");
const Template = require("./src/template")
const fs = require("fs");

const template = new Template();
const employee = new Employee;
const htmlPath = "./dist/index.html"
const questions = ["What is your team's manager's name?", "What is your team's manager's ID number?", "What is your team's manager's email address?"]

inquirer
  .prompt([employee.getName(questions[0]), employee.getId(questions[1]), employee.getEmail(questions[2])])
  .then((name) => { 
      const managerInfo = template.manager(name.name, name.id, name.email);
      
      fs.appendFile(htmlPath, managerInfo, (err) => {
          if(err) {
              console.log(err);
              }
            })
            }
          )