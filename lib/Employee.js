const inquirer = require("inquirer");
const fs = require("fs");
const Template = require("../src/template")
const template = new Template();

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(question) {

      return {
        type: "input",
        name: "manager",
        message: question
      }
        
    }

    getId() {

    }

    getEmail() {

    }

    getRole() {

    }
}

module.exports = Employee;