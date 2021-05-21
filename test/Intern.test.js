const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Creates new Intern object", () => {
    const testIntern = new Intern("name", "52", "test@test.com", "myUni");
    expect(testIntern).toBe({
      name: "name",
      id: "52",
      email: "test@test.com",
      school: "myUni",
    });
  });

  it("should return Intern school name", () => {
    const testIntern = new Intern("name", "52", "test@test.com", "myUni");
    expect(testIntern.getSchool()).toBe("myUni");
  });
  it("should return Intern role", () => {
    const testIntern = new Intern("name", "52", "test@test.com", "myUni");
    expect(testIntern.getRole()).toBe("Intern");
  });
});
