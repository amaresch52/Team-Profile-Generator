const Intern = require("../lib/Intern");
const testIntern = new Intern("name", "52", "test@test.com", "myUni");

describe("Intern", () => {
  it("Creates new Intern object", () => {
    expect(testIntern).toEqual({
      name: "name",
      id: "52",
      email: "test@test.com",
      school: "myUni",
    });
  });

  it("should return employee name", () => {
    expect(testIntern.name).toEqual("name");
  });
  it("should return employee Id number", () => {
    expect(testIntern.id).toEqual("52");
  });
  it("should return employee email address", () => {
    expect(testIntern.email).toEqual("test@test.com");
  });

  it("should return Intern school name", () => {
    expect(testIntern.getSchool()).toEqual("myUni");
  });
  it("should return Intern role", () => {
    expect(testIntern.getRole()).toEqual("Intern");
  });
});
