const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
    // this.role = 'Manager';  // ******remove this
  }

  getRole() {
    return 'Manager';
  } 

  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
