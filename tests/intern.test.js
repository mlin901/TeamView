const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization and properties", () => {
    it("should return an object containing properties (name, id, email, school), as well as methods (getName, getId, getEmail, getRole, and getSchool, which are tested below) when called with the 'new' keyword", () => {
      const obj = new Intern("Fred", "123", "Fred@123.com", "UC Davis");
      expect("name" in obj).toEqual(true);  
      expect("id" in obj).toEqual(true);  
      expect("email" in obj).toEqual(true);  
      expect("school" in obj).toEqual(true);  
    });
  });

  //Unit test for getName()
  describe("getName", () => {
    it("should return 'Fred' as the name", () => {
      const returnedName = new Intern("Fred", "123", "Fred@123.com", "UC Davis").getName();
      expect(returnedName).toEqual("Fred");
    });
  });

  //Unit test for getId()
  describe("getId", () => {
    it("should return '123' as the ID", () => {
      const returnedId = new Intern("Fred", "123", "Fred@123.com", "UC Davis").getId();
      expect(returnedId).toEqual("123");
    });
  });

  //Unit test for getEmail()
  describe("getEmail", () => {
    it("should return 'Fred@123.com' as the email address", () => {
      const returnedEmail = new Intern("Fred", "123", "Fred@123.com", "UC Davis").getEmail();
      expect(returnedEmail).toEqual("Fred@123.com");
    });
  });

  //Unit test for getSchool()
  describe("getOfficeNum", () => {
    it("should return 'Davis' as the Intern's school", () => {
      const returnedOfficeNum = new Intern("Fred", "123", "Fred@123.com", "UC Davis").getSchool();
      expect(returnedOfficeNum).toEqual("UC Davis");
    });
  });

  //Unit test for getRole()
  describe("getRole", () => {
    it("should return 'Intern' as the role", () => {
      const returnedRole = new Intern("Fred", "123", "Fred@123.com", "UC Davis").getRole();
      expect(returnedRole).toEqual("Intern");
    });
  });

});

