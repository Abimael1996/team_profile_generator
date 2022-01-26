class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(question) {

      return {
        type: "input",
        name: "name",
        message: question
      }
        
    }

    getId(question) {

      return {
        type: "input",
        name: "id",
        message: question
      }
    }

    getEmail(question) {

      return {
        type: "input",
        name: "email",
        message: question
      }
    }

    getRole() {

    }
}

module.exports = Employee;