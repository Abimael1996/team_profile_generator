const Employee = require('../lib/Employee');


describe('Manager Info', () => {
  it("should return an object that asks for the manager's name", () => {

    const employee = new Employee();
    const question = "What's the name of the manager?";

    employee.getName(question);

    expect.objectContaining({ message: question});
  }
  )
  it("should return an object that asks for the manager's ID", () => {

    const employee = new Employee();
    const question = "What's the manager's ID?";

    employee.getId(question);

    expect.objectContaining({ message: question});
  }
  )
});