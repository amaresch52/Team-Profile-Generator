const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Creates new Employee object", () => {
    const employed = new Employee("name", "52", "test@test.com");
    expect(employed).toBe({
      name: "name",
      id: "52",
      email: "test@test.com",
    });
  });

  it("should return employee name", () => {
    const employed = new Employee("name", "52", "test@test.com");
    expect(employed.getName()).toBe("name");
  });
  it("should return employee Id number", () => {
    const employed = new Employee("name", "52", "test@test.com");
    expect(employed.getId()).toBe("52");
  });
  it("should return employee email address", () => {
    const employed = new Employee("name", "52", "test@test.com");
    expect(employed.getEmail()).toBe("test@test.com");
  });
  it("should return employee role", () => {
    const employed = new Employee("name", "52", "test@test.com");
    expect(employed.getRole()).toBe("Employee");
  });
});
