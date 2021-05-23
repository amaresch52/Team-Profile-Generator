const Manager = require("../lib/Manager");
const testManager = new Manager("name", "52", "test@test.com", "5000");

describe("Manager", () => {
  it("Creates new Manager object", () => {
    expect(testManager).toEqual({
      name: "name",
      id: "52",
      email: "test@test.com",
      officeNumber: "5000",
    });
  });

  it("should return employee name", () => {
    expect(testManager.name).toEqual("name");
  });
  it("should return employee Id number", () => {
    expect(testManager.id).toEqual("52");
  });
  it("should return employee email address", () => {
    expect(testManager.email).toEqual("test@test.com");
  });
  it("should return Manager office number", () => {
    expect(testManager.getOfficeNumber()).toEqual("5000");
  });
  it("should return Manager role", () => {
    expect(testManager.getRole()).toEqual("Manager");
  });
});
