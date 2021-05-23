const Employee = require("../lib/Employee");
const employed = new Employee("name", "52", "test@test.com");
describe("Employee", () => {
  it("Creates new Employee object", () => {
    expect(employed).toEqual({
      name: "name",
      id: "52",
      email: "test@test.com",
    });
  });

  it("should return employee name", () => {
    expect(employed.name).toEqual("name");
  });
  it("should return employee Id number", () => {
    expect(employed.getId()).toEqual("52");
  });
  it("should return employee email address", () => {
    expect(employed.getEmail()).toEqual("test@test.com");
  });
  it("should return employee role", () => {
    expect(employed.getRole()).toEqual("Employee");
  });
});
