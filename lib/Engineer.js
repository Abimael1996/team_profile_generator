const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; 
    }

    getGitHub() {
        return `GitHub: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a>`
    }

    getRole() {
        return `<i class="fas fa-glasses"></i> Engineer`;
    }
}

module.exports = Engineer;