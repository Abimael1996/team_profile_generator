const Manager = require('../lib/Manager');


describe('Manager methods', () => {
  it("should return the name of the manager", () => {
    const name = "Bob"
    const manager = new Manager(name);

    test = manager.getName();

    expect(test).toEqual("Bob");
  }
  )
  it("should return the id of the manager", () => {
    const name = "Bob";
    const id = 1;
    const manager = new Manager(name, id);

    test = manager.getId();

    expect(test).toEqual(1);
  }
  )
  it ("should return the email of the manager", () => {
    const name = "Bob";
    const id = 1;
    const email = "bobemail@gmail.com";
    const manager = new Manager(name, id, email);

    test = manager.getEmail();

    expect(test).toEqual("bobemail@gmail.com")
  }
  )
  it ("should return the name of the class", () => {
    const manager = new Manager();

    test = manager.getRole();

    expect(test).toEqual(`<i class="fas fa-mug-hot"></i> Manager`);
  }
  )
  it ("should return the manager's office number", () => {
      const name = "Bon";
      const id = 1;
      const email = "bobemail@gmail.com";
      const officeNumber = 3451;
      const manager = new Manager(name, id, email, officeNumber);

      test = manager.getOfficeNumber();

      expect(test).toEqual("Office number: 3451");

  })
});