const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Creates new Engineer object", () => {
    const testEngineer = new Engineer("name", "52", "test@test.com", "github");
    expect(testEngineer).toBe({
      name: "name",
      id: "52",
      email: "test@test.com",
      github: "github",
    });
  });

  it("should return Engineer github user name", () => {
    const testEngineer = new Engineer("name", "52", "test@test.com", "github");
    expect(testEngineer.getGithub()).toBe("github");
  });
  it("should return Engineer role", () => {
    const testEngineer = new Engineer("name", "52", "test@test.com", "github");
    expect(testEngineer.getRole()).toBe("Engineer");
  });
});
