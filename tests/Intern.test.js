const Intern = require('../lib/Intern');

describe('Intern methods', () => {
  it("should return the name of the intern", () => {
    const name = "Bob"
    const intern = new Intern(name);

    test = intern.getName();

    expect(test).toEqual("Bob");
  }
  )
  it("should return the id of the intern", () => {
    const name = "Bob";
    const id = 1;
    const intern = new Intern(name, id);

    test = intern.getId();

    expect(test).toEqual(1);
  }
  )
  it ("should return the email of the intern", () => {
    const name = "Bob";
    const id = 1;
    const email = "bobemail@gmail.com";
    const intern = new Intern(name, id, email);

    test = intern.getEmail();

    expect(test).toEqual("bobemail@gmail.com")
  }
  )
  it ("should return the role of the employee with a graduate icon", () => {
    const intern = new Intern();

    test = intern.getRole();

    expect(test).toEqual(`<i class="fas fa-user-graduate"></i> Intern`);
  }
  )
  it ("should return the intern's school", () => {
      const name = "Bob";
      const id = 1;
      const email = "bobemail@gmail.com";
      const school = "Harvard";
      const intern = new Intern(name, id, email, school);

      test = intern.getSchool();

      expect(test).toEqual(`School: Harvard`);

  })
});