const Employee = require('../lib/Employee');


describe('Employee methods', () => {
  it("should return the name of the employee", () => {
    const name = "Bob"
    const employee = new Employee(name);

    test = employee.getName();

    expect(test).toEqual("Bob");
  }
  )
  it("should return the id of the employee", () => {
    const name = "Bob";
    const id = 1;
    const employee = new Employee(name, id);

    test = employee.getId();

    expect(test).toEqual(1);
  }
  )
  it ("should return the email of the employee", () => {
    const name = "Bob";
    const id = 1;
    const email = "bobemail@gmail.com";
    const employee = new Employee(name, id, email);

    test = employee.getEmail();

    expect(test).toEqual("bobemail@gmail.com")
  }
  )
  it ("should return the name of the class", () => {
    const employee = new Employee();

    test = employee.getRole();

    expect(test).toEqual("Employee");
  })
});