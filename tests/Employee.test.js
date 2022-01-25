const Employee = require('../lib/Employee');


describe('Manager Info', () => {
  it('should return an object that asks for the name of the manager', () => {

    const employee = new Employee();
    const question = "What's the name of the manager?";

    employee.getName(question);

    expect.objectContaining({ message: "What's the name of the manager?"});
  }
  )
});