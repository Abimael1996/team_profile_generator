const Engineer = require('../lib/Engineer');


describe('Engineer methods', () => {
  it("should return the name of the engineer", () => {
    const name = "Bob"
    const engineer = new Engineer(name);

    test = engineer.getName();

    expect(test).toEqual("Bob");
  }
  )
  it("should return the id of the engineer", () => {
    const name = "Bob";
    const id = 1;
    const engineer = new Engineer(name, id);

    test = engineer.getId();

    expect(test).toEqual(1);
  }
  )
  it ("should return the email of the engineer", () => {
    const name = "Bob";
    const id = 1;
    const email = "bobemail@gmail.com";
    const engineer = new Engineer(name, id, email);

    test = engineer.getEmail();

    expect(test).toEqual("bobemail@gmail.com")
  }
  )
  it ("should return the role of the employee with a glasses icon", () => {
    const engineer = new Engineer();

    test = engineer.getRole();

    expect(test).toEqual(`<i class="fas fa-glasses"></i> Engineer`);
  }
  )
  it ("should return the manager's GitHub username as a link", () => {
      const name = "Bon";
      const id = 1;
      const email = "bobemail@gmail.com";
      const github = "bobGit";
      const engineer = new Engineer(name, id, email, github);

      test = engineer.getGitHub();

      expect(test).toEqual(`GitHub: <a href="https://github.com/bobGit" target="_blank">bobGit</a>`);

  })
});