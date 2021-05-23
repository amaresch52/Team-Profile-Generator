const Engineer = require("../lib/Engineer");
const testEngineer = new Engineer("name", "52", "test@test.com", "github");

describe("Engineer", () => {
  it("Creates new Engineer object", () => {
    expect(testEngineer).toEqual({
      name: "name",
      id: "52",
      email: "test@test.com",
      github: "github",
    });
  });

  it("should return employee name", () => {
    expect(testEngineer.name).toEqual("name");
  });
  it("should return employee Id number", () => {
    expect(testEngineer.id).toEqual("52");
  });
  it("should return employee email address", () => {
    expect(testEngineer.email).toEqual("test@test.com");
  });

  it("should return Engineer github user name", () => {
    expect(testEngineer.getGithub()).toBe("github");
  });
  it("should return Engineer role", () => {
    expect(testEngineer.getRole()).toBe("Engineer");
  });
});
