const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization and properties", () => {
    it("should return an object containing properties (name, id, email, github), as well as methods (getName, getId, getEmail, getRole, and getGithub, which are tested below) when called with the 'new' keyword", () => {
      const obj = new Engineer("Fred", "123", "Fred@123.com", "FredGitHubAccount");
      expect("name" in obj).toEqual(true);  
      expect("id" in obj).toEqual(true);  
      expect("email" in obj).toEqual(true);  
      expect("github" in obj).toEqual(true);  
    });
  });

  //Unit test for getName()
  describe("getName", () => {
    it("should return 'Fred' as the name", () => {
      const returnedName = new Engineer("Fred", "123", "Fred@123.com", "FredGitHubAccount").getName();
      expect(returnedName).toEqual("Fred");
    });
  });

  //Unit test for getId()
  describe("getId", () => {
    it("should return '123' as the ID", () => {
      const returnedId = new Engineer("Fred", "123", "Fred@123.com", "FredGitHubAccount").getId();
      expect(returnedId).toEqual("123");
    });
  });

  //Unit test for getEmail()
  describe("getEmail", () => {
    it("should return 'Fred@123.com' as the email address", () => {
      const returnedEmail = new Engineer("Fred", "123", "Fred@123.com", "FredGitHubAccount").getEmail();
      expect(returnedEmail).toEqual("Fred@123.com");
    });
  });

  //Unit test for getGithub()
  describe("getOfficeNum", () => {
    it("should return 'FredGitHubAccount' as the engineer's GitHub account", () => {
      const returnedOfficeNum = new Engineer("Fred", "123", "Fred@123.com", "FredGitHubAccount").getGithub();
      expect(returnedOfficeNum).toEqual("FredGitHubAccount");
    });
  });

  //Unit test for getRole()
  describe("getRole", () => {
    it("should return 'Engineer' as the role", () => {
      const returnedRole = new Engineer("Fred", "123", "Fred@123.com", "FredGitHubAccount").getRole();
      expect(returnedRole).toEqual("Engineer");
    });
  });

});

