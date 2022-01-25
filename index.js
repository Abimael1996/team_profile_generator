const Employee = require("./lib/Employee")
const inquirer = require("inquirer");
const Template = require("./src/template")
const fs = require("fs");

const template = new Template();
const employee = new Employee;
const htmlPath = "./dist/index.html"
const questions = ["What is your team's manager's name?", "What is your eam's manager's ID number?"]

inquirer
  .prompt([employee.getName(questions[0])])
  .then((name) => { 
      const managerName = template.managerName(name.manager);
      
      fs.appendFile(htmlPath, managerName, (err) => {
          if(err) {
              console.log(err);
              }
            })
            }
          )