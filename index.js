const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Initialize a new employee object
// const employee = new Employee();

// Start the process of adding team members
// employee.buildTeamView();

console.log("This is the **** app./nStart by entering information about the manager of your team.");

let employeeList = []
let newEmployee = {}

//We start with the manager...
let employeeType = 'Add manager';

//Function that prompts for info, saves it, and eventually calls the function that writes to the HTML file
const askQuestions = () => {
  console.log(employeeType + '   ssssssssssssss')
  inquirer                // ******Add more validation
    .prompt([
      {
        type: 'input',
        message: "Name:",
        name: 'name',
      },
      {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
      },
      {       
        type: 'input',
        message: 'Email:',
        name: 'email',
        validate: function (email) {  // From https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
          if (valid) {
            console.log(" - Valid email address");
              return true;
          } else {
              console.log(".  Please enter a valid email address")
              return false;
          }
        }
      },
      {
        type: 'input',
        message: 'Office number:',
        name: 'officenum',
        when: employeeType==='Add manager',
      },
      {
        type: 'input',
        message: 'github:',
        name: 'officenum',
        when: employeeType==='Add engineer',
      },
      {
        type: 'input',
        message: 'School:',
        name: 'school',
        when: employeeType==='Add intern',
      },
      {
        type: 'list',
        message: 'What next?',    // *************
        name: 'menu',
        choices: ['Add engineer', 'Add intern', 'Input complete'],  // *********
      },
    ])
    .then((data) => {
      console.log('+++++++');
      console.log(data);
      // console.log('--------');
      // console.log(data.menu);
      switch(employeeType) {
        case 'Add manager':
          let newEmployee = new Manager(data.name, data.id, data.email, data.officenum);
          employeeType = data.menu;
          // askQuestions();
          break;
        case 'Add engineer':
          newEmployee = new Engineer(data.name, data.id, data.email, data.github);
          employeeType = data.menu;
          // askQuestions();
          break;
        case 'Add intern':
          newEmployee = new Intern(data.name, data.id, data.email, data.school);
          employeeType = data.menu;
          // askQuestions();
          break;
        default:
          console.log('HOW DID THIS HAPPEN!!!!'); // *******
          employeeType = false;  // **********
      }
      if (data.menu==='Input complete') {
        console.log('******should call file write function here');  // ***********
        // If Finished, quit and call function to write info to file
      } else {
        askQuestions();
      }
    });
  
  // employeeType = false;
};

askQuestions();

// const boss = new Manager('Bob', '001', 'abc@def.ghi', "1");

// console.log('---BOSS---');
// boss.promptForInfo();
// console.log('done**********************');
