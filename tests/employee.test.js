const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization and properties", () => {
    it("should return an object containing properties (name, id, email), as well as methods (getName, getID, getEmail, and getRole, which are tested below) when called with the 'new' keyword", () => {
      const obj = new Employee("Fred", "123", "Fred@123.com");
      expect("name" in obj).toEqual(true);  
      expect("id" in obj).toEqual(true);  
      expect("email" in obj).toEqual(true);  
    });
  });

  //Test for getName()
  describe("getName", () => {
    it("should return 'Fred' as the name", () => {
      const returnedName = new Employee("Fred", "123", "Fred@123.com").getName();
      expect(returnedName).toEqual("Fred");
    });
  });

  //Test for getId()
  describe("getId", () => {
    it("should return '123' as the ID", () => {
      const returnedId = new Employee("Fred", "123", "Fred@123.com").getId();
      expect(returnedId).toEqual("123");
    });
  });

  //Test for getEmail()
  describe("getEmail", () => {
    it("should return 'Fred@123.com' as the email address", () => {
      const returnedEmail = new Employee("Fred", "123", "Fred@123.com").getEmail();
      expect(returnedEmail).toEqual("Fred@123.com");
    });
  });

  //Test for getRole()
  describe("getRole", () => {
    it("should return 'Employee' as the role", () => {
      const returnedRole = new Employee("Fred", "123", "Fred@123.com").getRole();
      expect(returnedRole).toEqual("Employee");
    });
  });

});

