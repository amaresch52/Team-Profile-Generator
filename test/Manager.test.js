const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Creates new Manager object", () => {
    const testManager = new Manager("name", "52", "test@test.com", "5000");
    expect(testManager).toBe({
      name: "name",
      id: "52",
      email: "test@test.com",
      officeNumber: "5000",
    });
  });

  it("should return Manager office number", () => {
    const testManager = new Manager("name", "52", "test@test.com", "5000");
    expect(testManager.getOfficeNumber()).toBe("5000");
  });
  it("should return Manager role", () => {
    const testManager = new Manager(
      "name",
      "52",
      "test@test.com",
      "github",
      "5000"
    );
    expect(testManager.getRole()).toBe("Manager");
  });
});
