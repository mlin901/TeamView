const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization and properties", () => {
    it("should return an object containing properties (name, id, email, officeNum), as well as methods (getName, getId, getEmail, getRole, and getOfficeNum, which are tested below) when called with the 'new' keyword", () => {
      const obj = new Manager("Fred", "123", "Fred@123.com", "12");
      expect("name" in obj).toEqual(true);  
      expect("id" in obj).toEqual(true);  
      expect("email" in obj).toEqual(true);  
      expect("officeNum" in obj).toEqual(true);  
    });
  });

  //Test for getName()
  describe("getName", () => {
    it("should return 'Fred' as the name", () => {
      const returnedName = new Manager("Fred", "123", "Fred@123.com", "12").getName();
      expect(returnedName).toEqual("Fred");
    });
  });

  //Test for getId()
  describe("getId", () => {
    it("should return '123' as the ID", () => {
      const returnedId = new Manager("Fred", "123", "Fred@123.com", "12").getId();
      expect(returnedId).toEqual("123");
    });
  });

  //Test for getEmail()
  describe("getEmail", () => {
    it("should return 'Fred@123.com' as the email address", () => {
      const returnedEmail = new Manager("Fred", "123", "Fred@123.com", "12").getEmail();
      expect(returnedEmail).toEqual("Fred@123.com");
    });
  });

  //Test for getOfficeNum()
  describe("getOfficeNum", () => {
    it("should return '12' as the email address", () => {
      const returnedOfficeNum = new Manager("Fred", "123", "Fred@123.com", "12").getOfficeNum();
      expect(returnedOfficeNum).toEqual("12");
    });
  });

  //Test for getRole()
  describe("getRole", () => {
    it("should return 'Manager' as the role", () => {
      const returnedRole = new Manager("Fred", "123", "Fred@123.com", "12").getRole();
      expect(returnedRole).toEqual("Manager");
    });
  });

});

