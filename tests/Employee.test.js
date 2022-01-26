const Employee = require('../lib/Employee');


describe('Employee methods', () => {
  it("should return the name of the employee", () => {
    const name = "Bob"
    const employee = new Employee(name);

    employee.getName();

    expect(employee.getName()).toEqual(name);
  }
  )
  it("should return the id of the employee", () => {
    
    const name = "Bob";
    const id = "1";
    const employee = new Employee(name, id);

    employee.getId();

    expect(employee.getId()).toEqual(id);
  }
  )
});