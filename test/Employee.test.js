const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Start Employee instance", () => {
    const employed = new Employee();
    expect(typeof employed).tobe("object");
  });
  it("Set the name of Employee", () => {
    const name = new ""();
    const employed = new Employee();
    expect(employed.name).tobe(name);
  });
  it("Set the id", () => {
    const testEmail = "123@abc.com";
    const employed = new Employee("Foo", 1, value);
    expect(employed.email).tobe(value);
  });
});
